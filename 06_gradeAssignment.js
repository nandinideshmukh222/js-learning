console.log(`*************Assignment :02*****************`);

 function gradeCalculation(marks){
    if (marks>=90) {
        console.log(`Funtastic marks : ${marks}, Your Grade is: "A+"`,);
        
    } else  if (marks>=75 && marks<90) {
        console.log(`Excellent marks : ${marks}, Your Grade is: "A"`,);
     }

        
    else  {
        if(marks>=50 && marks<75) {
        console.log(`Good marks : ${marks}, Your Grade is: "B"`,);
          }
        
     else { 
        if (marks>=35 && marks<50) {
            console.log(`Need improvement : ${marks}, Your Grade is "C"`,);
         } else if (marks==null || marks<=0 || isNaN(+marks)) {
            console.log(`Please provide the valid marks : ${marks}`);
        } 
    }  
    }
}
    gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
    gradeCalculation(undefined);
    gradeCalculation(null);