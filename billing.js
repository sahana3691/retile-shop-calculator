// user input
let product_price=Number(prompt("product price:"));
let quantity=Number(prompt("enter the quantity:"));
let discount=Number(prompt("enter discount percentage:"));
let gst_rate = Number(prompt("Enter GST percentage:"));
// calculation for subtotal
let subtotal=product_price*quantity;
// diacount
let discount_amount = subtotal * discount / 100;
// taxable amount
let taxable_amount = subtotal - discount_amount;
// gst
let gst_amount = taxable_amount * gst_rate / 100;
// final
let final_amount = taxable_amount + gst_amount;
console.log(`---FINAL RECIPTE---`);
console.log("subtotal:",subtotal,"quantity:",quantity,"discount:",discount);
console.log("discount amount:",discount_amount);
console.log("taxable amount:",taxable_amount);
console.log("GST amount:",gst_amount);
console.log("Final amount:", final_amount);
