
// Calculate The Cost Of Products

// Items In Cart
var Toater = 18.99;
var Basketball = 20.95;
var Tshirt = 7.99;

// Shipping
var Shipping = 4.99;

// Calculation
var Total_Cost = Toater + Basketball + Tshirt;
// Result

console.log("RECEIPT");
console.log("......................");

console.log("Toaster = 18.99$");
console.log("Basketball = 20.95$");
console.log("Tshirt = 7.99$");
console.log("......................");

console.log("Total Cost = "  + Total_Cost+"$");
console.log ("Shipping = "  + Shipping+"$");

// Total Cost + Shipping
var Total = Total_Cost + Shipping;
console.log ("Total = " + Total+"$");

// Total Cost = 52.92 is the correct answer

// 10% Tax
var Tax = 10;
var total = Math.round(Total * 10) /100;
console.log ("Estimated_Tax (10%) = " + total+"$");

