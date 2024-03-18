console.log(`*************Assignment :01*****************`);

var voteEligible = function(age)
{
      if (age==0 || age=="negative" || age>130) {
        console.log(`Invalid Data -Age: "${age}"`);
        
      } else if (age<18 ) {
        
        console.log(`Not eligible for vote-Age: "${age}"`);


      } else if (age>18) {
        console.log(`Eligible for vote-Age: "${age}"`);

      } 
        
      }
      voteEligible(45);
      voteEligible(17);
      voteEligible(8);
      voteEligible(20);
      voteEligible(-10);
      voteEligible(200);
     voteEligible(0);
     voteEligible(null);



