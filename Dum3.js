let cart = [];
let total = 0;

// Login Function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginMsg").innerText = "Login Successful";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid Credentials";
    }
}

// Add to Cart
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    displayCart();
}

// Display Cart
function displayCart() {
    let list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item.name + " - ₹" + item.price;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully!");
        cart = [];
        total = 0;
        displayCart();
    }
}