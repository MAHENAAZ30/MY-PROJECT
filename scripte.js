let totalPrice = 0;
let discount = 0;
let finalPrice = 0;
let tax = 0;
let totalWithTax = 0;

function addToCart(price) {
    // Using addition assignment operator
    totalPrice += price;
    calculateFinalPrice();
}

function calculateDiscount() {
    // Using multiplication and subtraction assignment operators
    discount = totalPrice * 0.1; // 10% discount
    finalPrice = totalPrice - discount;
}

function calculateTax() {
    // Using multiplication assignment operator
    tax = finalPrice * 0.1; // 10% tax
}

function calculateFinalPrice() {
    calculateDiscount();
    calculateTax();
    // Using addition assignment operator
    totalWithTax = finalPrice + tax;
    updateCart();
}

function updateCart() {
    // Using assignment operators to update HTML content
    document.getElementById('totalPrice').textContent = 'Total Price: $' + totalPrice;
    document.getElementById('discount').textContent = 'Discount: $' + discount;
    document.getElementById('finalPrice').textContent = 'Final Price: $' + finalPrice;
    document.getElementById('totalWithTax').textContent = 'Total with Tax: $' + totalWithTax;
}

// Automatically apply discount when total price reaches $50
setInterval(() => {
    if (totalPrice >= 50) {
        calculateFinalPrice();
    }
}, 1000);

// Adding the ability to remove items from the cart
function removeFromCart(price) {
    // Using subtraction assignment operator
    totalPrice -= price;
    if (totalPrice < 0) {
        totalPrice = 0;
    }
    calculateFinalPrice();
}
