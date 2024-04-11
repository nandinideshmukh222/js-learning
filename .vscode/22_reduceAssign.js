class Employee{
    constructor(emp_id, emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    detail(){
console.log(`Employee Details => ID: ${this.emp_id}, Name : ${this.emp_name},Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
    }
}
const anil=new Employee(22,"Anil","IT",50000,"TCS");
const radha=new Employee(33,"Radha","HR",74000,"Wipro");
const rishi=new Employee(55,"Rishi","Fianance",47000,"TCS");
const sonali=new Employee(66,"Sonali","Fianance",45000,"Infy");
const monika=new Employee(77,"Monika","IT",40000,"Wipro");
const vinay=new Employee(88,"Vinayak","IT",75000,"TCS");
const mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployees = [anil,radha,rishi,sonali,monika,vinay,mahi];

console.log(`== 1.Find Employee from "Wipro" ===`);

arrayEmployees.filter( (personObj)=>{
    return personObj.emp_company=="Wipro";
} ).map ((element) =>{
  return `${element.emp_name} ${element.emp_company}`

}).forEach( (element)=>{
   console.log(element);
} );

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`== 2.Find Employees from "IT" and "HR" dept ===`);

arrayEmployees.filter( (personObj)=>{
    return personObj.emp_dept=="IT"  || personObj.emp_dept=="HR";
} ).map ((element) =>{
  return `${element.emp_name} ${element.emp_dept}`

}).forEach( (element)=>{
   console.log(element);
} );

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`== 3.Find Employees whose "id >50" ===`);

arrayEmployees.filter( (personObj)=>{
    return personObj.emp_id>50 
} ).map ((element) =>{
  return `${element.emp_id} ${element.emp_name}`

}).forEach( (element)=>{
   console.log(element);
} );

   
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


console.log(`== 4.Find Employees name start with "A" or "V" or "M" ===`);


arrayEmployees.filter( (personObj)=>{
    return personObj.emp_name.startsWith('A') || personObj.emp_name.startsWith('V')||personObj.emp_name.startsWith('M');
} ).map( (element) =>{
  return element.emp_name;
}).forEach( (element)=>{
   console.log(element);
} );
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);



const newArray = arrayEmployees.filter((emp)=>{
    return emp.emp_dept;  
});

const sumSalary = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(`5.Average salary of all department is: ${sumSalary/newArray.length}`);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const newArray1 = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT";  
});

const sumSalary1 = newArray1.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(`6.Average salary from IT department is: ${sumSalary1/newArray1.length}`);
