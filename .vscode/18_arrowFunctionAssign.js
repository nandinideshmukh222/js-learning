console.log(`Step 01 ===>`);

  let show = () => {
      console.log(`"Good Morning ,Today is Monday"`);
  }
  show();
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

  console.log(`Step 02 ===>`);
let multi = (n1,n2,n3=1) => {
      
      console.log(`multiplication is : ${n1*n2*n3}`);
  }
  console.log(`a.Values to be passed:5,5,2`);
  multi(5,5,2);
  console.log(`b.Values to be passed:10,4,default value for 3rd argument as 1`);
  multi(10,4);
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`Step 03 ===>`);

 let addition = (n1,n2,n3,n4,n5) => {
      let result = n1+n2+n3+n4+n5;
      return result;
    }
    let returnValue2 = addition(100,100,200,349,756);
    console.log(`Values to be passed:100,100,200,349,756`);
    console.log("Addition is: ", returnValue2);
  
    let returnValue = addition("i am",  "learning" ,  "ES6" , 'features' , "in depth");
    console.log(`Values to be passed:"i am", "learning", "ES6", 'features', "in depth"`);
    console.log("Concatnation is: ", returnValue);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
