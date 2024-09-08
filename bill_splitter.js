// Step 2: Display Output Details (Check first commit for Step 1)

let bill = 275; // Example bill value
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
let total = bill + tip;

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);

// Step 3: Create calucateTip Function

function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

let testBill = 100;
console.log(`Tip for $${testBill} bill is: $${calculateTip(testBill)}`);

// Use Arrays

const bills = [275, 40, 430]; // Data Set 1
const tips = bills.map(calculateTip); // Use map() to apply calculateTip to each bill
const totals = bills.map((bill, index) => bill + tips[index]); // Sum each bill and its corresponding tip

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);


