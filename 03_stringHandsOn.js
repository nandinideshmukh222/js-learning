function stringHandsOn() {
  var sentence = "   Hey you are doing good, keep it up   ";
  console.log(`Step 1:Given sentence is:"${sentence}"`);
  var length1 = sentence.length;
  console.log("         *********         ");

  console.log(`Step 2:Length of sentence is:"${length1}"`);
  var lengthbeforetrim = sentence.length;
  var sentenceaftertrim = sentence.trim();
  var lengthaftertrim = sentenceaftertrim.length;
  console.log("         *********         ");

  console.log(
    `Step 3:After Trim Sentence is:"${sentenceaftertrim}" and it's length is: ${lengthaftertrim}`
  );
  console.log("         *********         ");

  var totalSpaces = lengthbeforetrim - lengthaftertrim;
  console.log(`Step 4 :Total no.of extra Spaces is:${totalSpaces}`);
  var sentence = "Hey you are doing good, keep it up";
  var totalChars1 = sentence.length;
  var firstchar = sentence.charAt(0);
  var lastchar = sentence.charAt(totalChars1 - 1);
  console.log("         *********         ");

  console.log(
    `Step 5 :1St  char After trim is: ${firstchar} and last char after Trim is: ${lastchar}`
  );

  var sentence = "Hey you are doing good, keep it up";
  var resultValue = sentence.split(" ");
  console.log("         *********         ");

  console.log(
    `Step 6:${resultValue} Total words available in the sentence: ${resultValue.length}`
  );

  var sentence = "Hey you are doing good, keep it up";
  var result2 = sentence.search("good");
  console.log("         *********         ");

  console.log(`Step 7 :"good" is available at: ${result2}`);

  var greet = "Hey you are doing good, keep it up";
  var result = greet.substring(22);
  console.log("         *********         ");

  console.log(
    `Step 8 :substring starting from index 22 is: ${greet.substring(22)}`
  );

  var greet = "Hey you are doing good, keep it up";
  var result = greet.includes("");
  console.log("         *********            ");

  console.log(`Step 9 :is string ends with word "up": ${result}`);

  var greet = "Hey you are doing good, keep it up";
  var result = greet.includes("");
  console.log("         *********         ");

  console.log(`Step 10 :is string starts with word "Hey": ${result}`);
}
stringHandsOn();
