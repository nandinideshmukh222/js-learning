console.log("=======Step:01==========");
function number(){
  console.log("Inside Number function argument is");
}
  number();
  function name(){
    console.log("Inside Name function argument is");
  }
    name();
    

    console.log("=======Step:02==========");
    function personalDetails(firstName,lastName,collegeName)
    {
        var result=firstName;
        console.log(" My First Name :",result);
        var result=lastName;
        console.log(" My Last Name :",result);
        var result=collegeName;
        console.log(" My College Name :",result);
    }
    
     personalDetails("Komal"," Nimbalkar"," SVERI");
 

     console.log("=======Step:03==========");
            function swapValues(arg1,arg2){
            console.log("===Before Swap=== ");
            console.log("Virat:",arg1, "Anushka:", arg2);
            var temp=arg1;
            arg1=arg2;
            arg2=temp;
            var result=
            console.log("===After Swap=== ");
            console.log("Virat:",arg1, "Anushka:", arg2);
           }
                swapValues("Virat","Anushka");
                swapValues(1000,2000);

   console.log("=======Step:04==========");
       
      function addThreeValue(n1,n2,n3)
       {
        console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition : ", result);
}
   addThreeValue(10.23,600,40)
   addThreeValue("Hello"," Good"," Morning")

       
