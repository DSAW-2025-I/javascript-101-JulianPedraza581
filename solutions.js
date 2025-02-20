// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
}
let sum = a + b;
console.log(sum);
return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
}
let resultado = 1;
for (let i = 2; i <= n; i++) {
    resultado *= i;
}
console.log(resultado);
return resultado;
}


// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || !arr.every(num => typeof num === "number")) {
    console.log("Los datos de entrada no son adecuados");
    return;
}
let resultado = Math.max(...arr);
console.log(resultado);
return resultado;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
}
let match = str.match(/[aeiouAEIOU]/g);
let resultado = match ? match.length : 0;
console.log(resultado);
return resultado;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || n < 2 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
}
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        console.log(false);
        return false;
    }
}
console.log(true);
return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
