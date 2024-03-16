console.log(`******************Step 1*********************`);

function greaterNumber(n1,n2)
{
    
    var result =n1>n2 ? n1 : n2 ;
    console.log(`Greater no. among ${n1} & ${n2} is : ${result}`)
}
  greaterNumber(10,-10);
  greaterNumber(800,899);


  console.log(`******************Step 2*********************`);
  function isEvenOrOddNumber(num1){
    var result=num1%2==0 ? "True" : "False";
    console.log(`Given "${num1}" is Even or Odd : ${result}`);
  }
  isEvenOrOddNumber(29);
  isEvenOrOddNumber(44);
  isEvenOrOddNumber(0);
  isEvenOrOddNumber(101);

  console.log(`******************Step 3*********************`);

   function wordLength(arg)
   {
    var result=arg.length %2==0 ? "Even" :"Odd"
    console.log(`Given word "${arg}" length is : ${result}`);

   }
    wordLength("JavaScript");
    wordLength("Developer");
    wordLength("Google");
     

