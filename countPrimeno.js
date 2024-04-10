console.log(`=============== Program to count Prime Numbers from given array ============`);
const array = [3,9,7,6,19,29,53]
function countNum(num) {
  for (let index = 2; index < num; index++) {
    if (num%index==0) {
        return false;
    }
    
  }  
   return true; 
}  
function countPrimeNumber(array) {
    let count = 0;
    let primeNumberArray=[];
    array.forEach(element => {
       if (countNum(element)) {
           count++
           primeNumberArray.push(element);
       } 
    });

    console.log(`Prime Numbers in given array is: ${primeNumberArray}`);
    console.log(`Count of Prime Numbers in given array is: ${count} `);
}
countPrimeNumber(array);