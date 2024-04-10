console.log(`*********Step 1***************`);

function countPrimes(array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (isPrimeNumber(array[index])) {
      count++;
    }
  }
  return count++;
}

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}

const array = [3, 9, 7, 6, 19, 29, 53];

console.log(`Given Array is ===>>> [ ${array}]`);
console.log("Prime Number Count :", countPrimes(array));

for (const num of array) {
  const result = isPrimeNumber(num);
  console.log(`Given Number " ${num} " Is Prime Number ===>>> ${result}`);
}

console.log(`*********Step 2***************`);

function spaceCount(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }

  return count;
}

const sentence1 = "Revision is the mother of success";
const spaces1 = spaceCount(sentence1);
console.log(`Total number of spaces in sentence1:" ${spaces1}`);

const sentence2 = "java script is language of internate world";
const spaces2 = spaceCount(sentence2);
console.log(`Total number of spaces in sentence2:" ${spaces2}`);
