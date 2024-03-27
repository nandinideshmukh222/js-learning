let professor={
    name:"Prof.Nandini Nimnbalkar",
    collegeName:"SVERI Pandharpur",
    designation:"HOD",
    subject:"HTML",
    age:40,
    degree:{
            engg:"CSE",
            PHD:"Advance Computing"
           },
    certificates:["Hacker Rank Participation","Certifacate in IFC Course","Certificate in Adavance prgmming"]
}
    
    console.log("Total Object:   ");
    console.log(professor);
    console.log(professor.degree);

    professor.totalexperience="10 Years";
    console.log("After adding Total experience:");
    console.log(professor);

    professor.collegeName="COEP";
    console.log("After Modifying Clg Name:");
    console.log(professor);

    professor.subject="CSS";
    console.log("After Modifying Subject:");
    console.log(professor);

    professor.certificates.splice(2,0,"Oracle Certified");
    console.log(professor.certificates);
     
    var len=professor.certificates.length;
     console.log(`Last Element of Array :>${professor.certificates[len-1]}`);
  console.log( `Traversing Array Certicates :>`);
  for(const name of professor.certificates){
    console.log(name);
  }




