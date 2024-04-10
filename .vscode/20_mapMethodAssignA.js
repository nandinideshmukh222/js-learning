const array = [20, 11, 40, 25, 23,11,9,31,60,2,19];
const arrayTransform = [];
  const  arrayNew=array.map((add) => {
   return add+10;
});
console.log(`Given array : ${array}`);
console.log(`1. After adding 10 in each element : ${arrayNew}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const arrayCube = array.map( (currentValue)=>{
    return currentValue * currentValue*currentValue;
} );
console.log(`2.Cube of each array element : ${arrayCube}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

  

const arrayindex = array.map( (currentValue,index)=>{
    return currentValue + index;
} );
console.log(`3. Adding index value of each array element : ${arrayindex}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
