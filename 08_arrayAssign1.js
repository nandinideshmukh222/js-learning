var fruits_seasonal=["Banana","orange","Apple","Mango","WaterMelon"];
    console.log(`original Array:`);   
     console.log(fruits_seasonal);
    console.log(`Step 1: First Element: "${fruits_seasonal[0]}" `);
        var arraylength=fruits_seasonal.length;
    console.log(`         Last Element: "${fruits_seasonal[arraylength-1]}" `);
 
 
    console.log(` Step 2: Add Papaya before Banana :`);
    console.log(fruits_seasonal);
        fruits_seasonal.unshift("Papaya")
    console.log(fruits_seasonal);

    console.log(` Step 3: Remove Mango :`);
    console.log(fruits_seasonal);
       var removeMango=fruits_seasonal.splice(5,1)
    console.log(fruits_seasonal);

    console.log(` Step 4: Add Pineapple @ last :`);
    console.log(fruits_seasonal);
       var addPineapple= fruits_seasonal.push("Pineapple")
    console.log(fruits_seasonal);

    console.log(` Step 5: Add Dragon Fruits before Watermelon :`);
    console.log(fruits_seasonal);
        var addDragon= fruits_seasonal.splice(4,0,"Dragon Fruits")
    console.log(fruits_seasonal);

    console.log(` Step 6: Replace Orange with Kiwi :`);
    console.log(fruits_seasonal);
        fruits_seasonal.splice(2,1,"Kiwi")
    console.log(fruits_seasonal);
     
    console.log(` Step 7: Log element index 1-4:`);
    console.log(fruits_seasonal);
      var index= fruits_seasonal.slice(1,5)
    console.log(index);


    console.log(` Step 8: Console last 3 element :`);
        var fruits_seasonal=["Banana","orange","Apple","Mango","WaterMelon"];
    console.log(fruits_seasonal);
        var len=fruits_seasonal.length
        var sliceele= fruits_seasonal.splice(len-3)
    console.log(sliceele);
    

