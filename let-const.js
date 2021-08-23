// break up with var ha ha
let balance = 1240;
balance = 1340;
const userName = 'Rahman';
const fullName = "Hafijur" + userName;
console.log(fullName);

// const balance = 1240;
// balance = 1340 // will throw error

const numbers = [2, 4, 6, 8];
// numbers = [99, 145, 3]; // not allowed
numbers.push(555);
numbers[1] = 333;

let sum = 0
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]
    console.log(number)
    sum = sum + number;
}

const student = { roll: 101, name: 'mofij', job: 'intern' };
student.name = 'MOfazzol';
// student = { name: 'mofazzol' };