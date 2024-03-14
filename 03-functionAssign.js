console.log("=======Step:01==========");
function number(){
  console.log("My Personal Details:");
}
  number();
  function name(){
    console.log("My Educational Details:");
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
            function swapNumber(arg1,arg2){
            console.log("===Before Swap=== ");
            console.log("1000:",arg1, "2000:", arg2);
            
               var temp1=arg1;
                    arg1=arg2;
                     arg2=temp1;
            console.log("===After Swap=== ");
            console.log("1000:",arg1, "2000:", arg2);
           }
               swapNumber(1000,2000);
                
                
                function swapValues(arg3,arg4){
                  console.log("===Before Swap=== ");
                  console.log("Virat:",arg3, "Anushka:", arg4);
                  
                  var temp2=arg3;
                  arg3=arg4;
                  arg4=temp2;
                  console.log("===After Swap=== ");
                  console.log("Virat:",arg3, "Anushka:", arg4);
                 }
                      swapValues("Virat","Anushka");
      

   console.log("=======Step:04==========");
       
      function addThreeValue(n1,n2,n3)
       {
        console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition : ", result);
}
   addThreeValue(10.23,600,40)
   addThreeValue("Hello"," Good"," Morning")

       
