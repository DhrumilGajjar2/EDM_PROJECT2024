document.addEventListener('DOMContentLoaded', function() {
    // Cart logic
    const cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');

    function addCart(product) {
        const cartItem = cart.find(item => item.id === product.id);
        if(cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({...product, quantity: 1});
        }
        updateCart();
    }

    function updateCart() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

        let cartItemsContainer = document.getElementById('cart-items-container');
        if (!cartItemsContainer) {
            cartItemsContainer = document.createElement('div');
            cartItemsContainer.id = 'cart-items-container';
            cartItemsContainer.className = 'cart-items-container';
        } else {
            cartItemsContainer.innerHTML = '';
        }

        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price} x ${item.quantity}</span>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        const totalElement = document.createElement('div');
        totalElement.className = 'cart-total';
        totalElement.innerHTML = `Total: $${total.toFixed(2)}`;

        cartItemsContainer.appendChild(totalElement);

        const checkoutBtn = document.createElement('button');
        checkoutBtn.id = 'checkout-btn';
        checkoutBtn.textContent = 'Checkout';
        checkoutBtn.addEventListener('click', () => {
            alert('Proceeding to checkout!');
        });

        cartItemsContainer.appendChild(checkoutBtn);

        document.body.appendChild(cartItemsContainer);
    }

    cartIcon.addEventListener('click', () => {
        const cartItemsContainer = document.getElementById('cart-items-container');
        if (cartItemsContainer) {
            cartItemsContainer.remove();
        } else {
            updateCart();
        }
    });

    // Back-to-top button logic
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form validation
    const subscribeButton = document.querySelector('.search_bar button');
    const emailInput = document.querySelector('.search_bar input');

    subscribeButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
});


//login&sign up logic

document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.getElementById('user-icon');
    const authModal = document.getElementById('auth-modal');
    const closeModal = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    userIcon.addEventListener('click', () => {
        authModal.style.display = 'block';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    closeModal.addEventListener('click', () => {
        authModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });

    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    document.getElementById('login').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        // Perform login logic here (e.g., send to server)
        alert('Logged in with email: ' + email);
    });

    document.getElementById('signup').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        // Perform signup logic here (e.g., send to server)
        alert('Signed up with username: ' + username);
    });
});
