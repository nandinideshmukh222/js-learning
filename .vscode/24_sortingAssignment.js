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



console.log(`=========1.sorting an emp_id in descending order======`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_id>=p2.emp_id ? -1 : 1
});

arrayEmployees.forEach(element => {
    console.log(element.emp_id, element.emp_name, element.emp_dept);
});
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`=========2.sorting an emp_dept in asscending order======`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_dept>=p2.emp_dept ? 1 : -1
});

arrayEmployees.forEach(element => {
    console.log(element.emp_id, element.emp_dept,element.emp_company);
});
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`=========3.sorting an emp_salary in descending order======`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_salary>=p2.emp_salary ?- 1 : 1
});

arrayEmployees.forEach(element => {
    console.log(element.emp_name, element.emp_salary,element.emp_company);
});
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
