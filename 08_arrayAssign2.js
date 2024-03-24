const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
  var len=arrayNumbers.length;
  console.log( `Step 1:Length of Array: ${len} `);
  
  console.log( `Step 2: 1St No. of Array :${arrayNumbers[0]} `);
  console.log( `        Last No. of Array :${arrayNumbers[len-1]}`);

  console.log( `Step 3: 3rd Last No. of Array :${arrayNumbers[len-3]}`);

  console.log( `Step 4: Even no.from Array :`);

  for (const no of arrayNumbers) {
    if (no%2==0) {
        console.log(no);
 }
}

console.log( `Step 5: Odd no.from Array :`);

for (const no of arrayNumbers) {
  if (no%2!=0) {
      console.log(no);
}
}

let sumEven=0;
for (const number in arrayNumbers) {
    if (number%2==0) {
        sumEven=sumEven+arrayNumbers[number]
    }
}
console.log(`Step 6: Sum of even index :${sumEven}`);


let sumOdd=0;
for (const number in arrayNumbers) {
    if (number%2!=0) {
        sumOdd=sumOdd+arrayNumbers[number]
    }
}
console.log( `Step 7:  Sum of Odd index :${sumOdd}`);

let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];  
    sum = sum + element;
}
console.log(`Step 8: Sum of an array is: ${sum}`);
console.log(`Step 9: No. which multiple of 5 :`);
for (const number of arrayNumbers) {
    if (number%5==0) {
        console.log(` ${number}`);
    }
}

console.log(` Step 10: 115 no. available in arrayNumbers ?`);
console.log(arrayNumbers.includes(115));

console.log(` Step 11: 23 no. available in arrayNumbers ?`);
console.log(arrayNumbers.includes(23));

console.log(`Step 12: After inserting 55,66 at index 3`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);


console.log(`Step 13: Deleting 3 element from index 4`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);



  