console.log(`========================================`);
var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (const element of friendList) {
    console.log(element);
}

console.log(friendList);
const elements = friendList.join(",");
console.log(elements);

console.log(friendList.join("="));