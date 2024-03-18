console.log(`****Step : 1**********`);

function squareOfWordLength(arg1) {
    var length=arg1.length;
     n2=2;
    result=length**n2;
    return result;
}
squareOfWordLength("JavaScript")
console.log(`Length Square of "JavaScript" is : ${result} `);
squareOfWordLength ("Google Chrome")
console.log(`Length Square of "Google Chrome" is : ${result} `);
squareOfWordLength("Developer Smart")
console.log(`Length Square of "Developer Smart" is : ${result} `);



 
console.log(`****Step : 2**********`);


function divideByTotalWord() {
    var str="I am Angular Developer";
    var strLength=str.length;
    var newStr=str.split(" ");
    var newStrLength = newStr.length;
    var div = strLength/newStrLength;
    var mul = strLength*newStrLength
    console.log(`String length  divide by total number of words : ${div}`);
    console.log(`String length multiply with total number of words : ${mul}`);
}
divideByTotalWord();