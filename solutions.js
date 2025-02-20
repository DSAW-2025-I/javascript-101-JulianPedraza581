// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Los datos de entrada no son adecuados";
}
return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return "Los datos de entrada no son adecuados";
}
let result = 1;
for (let i = 2; i <= n; i++) {
    result *= i;
}
return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || !arr.every(num => typeof num === 'number')) {
    return "Los datos de entrada no son adecuados";
}
return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados";
}
let vowels = "aeiouAEIOU";
return str.split('').filter(char => vowels.includes(char)).length;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) {
    return "Los datos de entrada no son adecuados";
}
for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
}
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
