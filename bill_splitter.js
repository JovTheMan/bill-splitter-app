// Function to calculate the tip based on bill amount
function calculateTip(bill) {
    // Use ternary operator to determine the tip percentage
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// Test the function with a bill value of 100
let testBill = 100;
console.log(`Tip for $${testBill} bill is: $${calculateTip(testBill)}`);

// Data Set 1: Bill values of 275, 40, and 430
const bills = [275, 40, 430];

// Use map() to create an array of tips based on the bills
const tips = bills.map(calculateTip);

// Create an array of totals (bill + tip) for each bill
const totals = bills.map((bill, index) => bill + tips[index]);

// Log the results for bills, tips, and totals
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

// Additional test with Data Set 2: Bill values of 125, 555, and 44
const bills2 = [125, 555, 44];
const tips2 = bills2.map(calculateTip);
const totals2 = bills2.map((bill, index) => bill + tips2[index]);

console.log("Bills Set 2:", bills2);
console.log("Tips Set 2:", tips2);
