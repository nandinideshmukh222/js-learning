console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Nandini";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);



function totalWords(W1){
    //var W1 = "I am happy buddy";
    var result = W1.split("")
    console.log(result);
    console.log(`Total words are: ${result.length}`);
}
totalWords("I am happy buddy");
totalWords("I am learning JS the language internet");



function totalWord(arg1){
    var totalNo = "arg1"
    var resultValue = arg1.split(" ")
    console.log(`Result :${resultValue}`);
    console.log(`Total words Are:${resultValue.length}`);
}
totalWord("I am happy Buddy")
totalWord("I am learning JS the language of internat")


function lengthOfWords(arg){
    var splitWords = arg.split(" ");
    var len = splitWords.length;
    return len;
}
var output = lengthOfWords("I am happy Buddy");
console.log(`Length of words : ${output}`);
var output = lengthOfWords("I am learning JS the language of Internet");
console.log(`Length of words : ${output}`);

// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");