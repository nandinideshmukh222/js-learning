const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index<word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
       vowelsCount++; 
    }
}

console.log(`Step 1 :Total no.of vowels in string: ${vowelsCount}`);




let sum=0;
for (let index = 0; index <=5; index++) {
   sum = sum + index * index * index;  
}

console.log(`Step 2: The sum of cube of numbers from 1 to 5 is: ${sum}`);




function oddPositionedChars(arg) {
    for (let index = 0; index < arg.length; index++) {
        const element = arg.charAt(index);
        if (index%2!=0 && element !=" ") {
            console.log (element);
        }
    }
}
console.log("Step: 3 ******* ");

console.log("Odd positioned chars of 1st String");
oddPositionedChars("Hard work always pays back");
console.log("Odd positioned chars of 2nd String");
oddPositionedChars("Soon I will be UI IT Champ");
