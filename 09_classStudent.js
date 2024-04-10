
class Student {
    constructor(rollno, name, division){
        this.rollno = rollno;
        this.name = name;
        this.division=division;
    }
    getDetails(){
        console.log(`Student Details => rollno: ${this.rollno}, name: ${this.name}, division: ${this.division}`);
    }
}
const nandini = new Student(1, "Nandini", "A");
nandini.getDetails();
const monali = new Student(2, "Monali", "B");
monali.getDetails();
const mohini = new Student(3, "Mohini", "C");
mohini.getDetails();


