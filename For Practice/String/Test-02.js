
// Create Receipt

// Items Price
var Basketball = 20.95;
var Tshirt = 7.99;

// Order List
// Basketball = 2
// Tshirt = 2

//Calculate
var Total = (2095 + 799) *2 /100;
// Result 
console.log("Items: " + '('+ (2+2) +')'+ "-----------------= "+ '$' +Total);

// Shipping & Handling Price
var Shipping = 4.99;
var Shipping_Price = Shipping *2;
console.log("Shipping & Handling: " + "------= " +  '$' + Shipping_Price);

// Grand Total
console.log("___________________________________");
var Grand_Total = Total + Shipping_Price;
console.log("Grand Total: " + "--------------= " +  '$' + (Shipping_Price + Total));
console.log("___________________________________");

// Tax 10%
var Tax = 10;
var Estimated_Tax = Math.round(Grand_Total * Tax) /100;
console.log("Estimated​​ ​Tax (10%):" +"-------= "+ '$'+Estimated_Tax);
console.log("___________________________________");

// Order Total
console.log("Order Total: " +"--------------= " +'$' + (Grand_Total + Estimated_Tax));

