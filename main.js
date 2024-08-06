document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("back-to-top");
    const cartIcon = document.getElementById("cart-icon");
    const authModal = document.getElementById("auth-modal");
    const closeModal = document.querySelector(".close");
    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    cartIcon.addEventListener("click", () => {
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = "";
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.className = "cart-item";
            itemElement.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.price}</p>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
        authModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        authModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == authModal) {
            authModal.style.display = "none";
        }
    });

    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-from-cart")) {
            const itemId = e.target.dataset.id;
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems = cartItems.filter(item => item.id !== itemId);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            e.target.parentElement.remove();
        }
    });

    showSignup.addEventListener("click", () => {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
    });

    showLogin.addEventListener("click", () => {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    });

    document.getElementById("login-button").addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        // Validate login credentials and handle login logic
    });

    document.getElementById("signup-button").addEventListener("click", (e) => {
        e.preventDefault();
        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        // Validate signup data and handle signup logic
    });
});
