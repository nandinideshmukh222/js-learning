const arrayNumbers = [2, 4, 1, 7, 9, 8];

for (var element of arrayNumbers) {
    console.log(element);
}

let sum = 0;// 7
for (var element of arrayNumbers) {
    sum = sum + element;
}
console.log(`Sum of an array : ${sum}`);

let multiplication = 1;
for (var element of arrayNumbers) {
    multiplication = multiplication * element;
}  
console.log(`multiplication of an array : ${multiplication}`);  
  
let substraction =0;
    
  for (let element of arrayNumbers){
    substraction = substraction - element;
  }
  console.log(`substraction of an array : ${substraction}`);  


  
