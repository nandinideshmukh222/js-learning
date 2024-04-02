console.log(`***********Step 1**************`);
class Vehicle {
  constructor(company, color, milage, cost, fuel) {
    this.company = company;
    this.color = color;
    this.milage = milage;
    this.cost = cost;
    this.fuel = fuel;
  }
  detail() {
    console.log(
      `Vehicle Details >company ${this.company}, color: ${this.color},cost:${this.cost} ,milage: ${this.milage},fuel: ${this.fuel}`
    );
  }
}
const swift = new Vehicle("Swiftvdi", "Blue", 25.22, 1000000, "diesel");
swift.detail();
const honda = new Vehicle("Honda Amaze", "Red", 30.1, 800000, "petrol");
honda.detail();
const kia = new Vehicle("Kia Seltos", "Marron", 20.1, 1300000, "cng");
kia.detail();
const i20 = new Vehicle("Hrudai i20", "Black", 32.0, 1400000, "petrol");
i20.detail();
const tata = new Vehicle("Tata Tiago", "white", 29.22, 700000, "cng");
tata.detail();
console.log(`===== Traversing array object ======`);
const arrayOfVehicle = [swift, honda, kia, i20, tata];
for (const key of arrayOfVehicle) {
  key.detail();
}

console.log(`***********Step 2**************`);

class College {
  constructor(name, branches, grade, address) {
    this.name = name;
    this.branches = branches;
    this.grade = grade;
    this.address = address;
  }    display()
    {
      console.log(`College Details> Name : ${this.name}, Branches: ${this.branches},Grade:${this.grade} ,Address: ${this.address}`);
    }
  }

const sveri = new College("SVERI", 7, "A++", "Pandharpur");
sveri.display();
const skn = new College("Singhgad ", 6, "A+", "Korti,Pandharpur");
skn.display();
const jspm = new College("JSPM", 10, "B+", "Wagholi");
jspm.display();
const coep = new College("COEP", 12, "A++", "Pune");
coep.display();
