// Back to Top Button Functionality
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Cart Functionality
let cartItems = [];
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const cartIcon = document.getElementById("cart-icon");
const cartItemsContainer = document.getElementById("cart-items-container");

document.querySelectorAll(".add-to-cart").forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();

        const productName = this.dataset.name;
        const productPrice = parseFloat(this.dataset.price);

        const product = {
            name: productName,
            price: productPrice
        };

        cartItems.push(product);
        cartCount++;
        cartCountElement.innerText = cartCount;

        // Display Cart Items
        displayCartItems();
    });
});

cartIcon.addEventListener("click", function() {
    cartItemsContainer.style.display = cartItemsContainer.style.display === "none" ? "block" : "none";
});

function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(function(item, index) {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Auth Modal Functionality   //not working?
const authModal = document.getElementById("auth-modal");
const closeAuthModalBtn = document.querySelector(".modal .close");
const userIcon = document.getElementById("user-icon");
const showLoginBtn = document.getElementById("show-login");
const showSignupBtn = document.getElementById("show-signup");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

userIcon.addEventListener("click", function() {
    authModal.style.display = "block";
});

closeAuthModalBtn.addEventListener("click", function() {
    authModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === authModal) {
        authModal.style.display = "none";
    }
});

showLoginBtn.addEventListener("click", function() {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
});

showSignupBtn.addEventListener("click", function() {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
});

// Prevent form submission for demo    //not working?
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login form submitted!");
});

document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup form submitted!");
});
