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

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Step :1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const arrayEmployee = [anil,radha,rishi,sonali,monika,vinay,mahi];
arrayEmployee.forEach(employee => {
    if (employee.emp_company=="TCS") {
        console.log(`emp_name : ${employee.emp_name} , emp_company : ${employee.emp_company}`);
    }
});
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Step :2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


arrayEmployee.forEach(employee => {
    if (employee.emp_dept=="Fianance") {
        console.log(`emp_name : ${employee.emp_name} , emp_dept : ${employee.emp_dept}`);
    }
});
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Step :3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


arrayEmployee.forEach(employee => {
    if (employee.emp_name.startsWith(`R`))
    {
       employee.detail(); 
    }
});
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Step :4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


arrayEmployee.forEach(employee => {
    if (employee.emp_salary>75000) {
        console.log(`emp_name : ${employee.emp_name} , emp_company : ${employee.emp_company}, emp_salary: ${employee.emp_salary}`);
    }
});

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Step :5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);



arrayEmployee.forEach(employee => {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT" ) {
        employee.detail(); 

    }
});
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Step :6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

arrayEmployee.forEach(employee => {
    if (employee.emp_company=="Infy") {

        employee.detail(); 

    }
});
