console.log("===========Step:01===>Object 01 =================");
const bankSbi = {
    name : "State Bank of India",
    state : "MH",
    branch: "Wagholi",
    manager: "Milind Kore"
 
}
console.log(bankSbi);
console.log("========Step:02===> Object 02 ===================");

const bankLocation ={
    street: "Opposite to Croma",
    city: "pune",
    pin: 412207
}
console.log(bankLocation);

console.log("==========Step:03===> Cloning 2 objects ============");
const clone01 = Object.assign({},bankSbi);
console.log("Cloned object 1:",clone01);
const clone02 = Object.assign({},bankLocation);
console.log("Cloned object 2:", clone02);

console.log('==========Step:04===> Creating new Object ============');
const rateOfInterest = {
    homeLoanInterest: "8.35%",
    personalLoanInterest: "10.75%",
    dueInterest: "14% ",
}
console.log(rateOfInterest);

console.log('===========Step:05===> Merging 3 Objects =======');
const sbiDetails = Object.assign({}, bankSbi,bankLocation,rateOfInterest );
console.table(sbiDetails);


console.log('=========Step:6==>Traversing Objects ==========');
for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
}