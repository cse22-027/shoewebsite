// Sample product data
    const products = [
    {
        id: 1,
        name: "Premium Running Shoes",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Men's",
        rating: 4.5,
        colors: ["Black", "Blue", "Red"]
    },
    {
        id: 2,
        name: "Casual Sneakers",
        price: 449.99,
        image: "https://images.unsplash.com/photo-1600269452121-1f5d14102c41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Women's",
        rating: 4.2,
        colors: ["White", "Pink", "Gray"]
    },
    {
        id: 3,
        name: "Leather Dress Shoes",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Men's",
        rating: 4.8,
        colors: ["Brown", "Black"]
    },
    {
        id: 4,
        name: "Kids' Sport Shoes",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1543508282-5c1f427f023f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Kids'",
        rating: 4.7,
        colors: ["Blue", "Red", "Green"]
    },
    {
        id: 5,
        name: "High-Top Basketball Shoes",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Men's",
        rating: 4.9,
        colors: ["Black", "White", "Gold"]
    },
    {
        id: 6,
        name: "Comfort Sandals",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Women's",
        rating: 4.3,
        colors: ["Brown", "Black", "Beige"]
    },
    {
        id: 7,
        name: "Trail Running Shoes",
        price: 649.99,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Men's",
        rating: 4.6,
        colors: ["Green", "Black", "Orange"]
    },
    {
        id: 8,
        name: "Fashionable Heels",
        price: 549.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Women's",
        rating: 4.4,
        colors: ["Black", "Silver", "Red"]
    }
    ];

    // Shopping cart
    let cart = [];

    // DOM elements
    const productsContainer = document.getElementById('products-container');
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.getElementById('search-bar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Display products
    function displayProducts() {
    productsContainer.innerHTML = '';

    products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card bg-white rounded-lg overflow-hidden shadow-md';

    productCard.innerHTML = `
                    <div class="relative">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
                        <div class="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">NEW</div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-semibold text-lg text-gray-800">${product.name}</h3>
                            <span class="text-indigo-600 font-bold">P${product.price.toFixed(2)}</span>
                        </div>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400 mr-2">
                                ${getStarRating(product.rating)}
                            </div>
                            <span class="text-gray-500 text-sm">${product.rating}</span>
                        </div>
                        <div class="flex flex-wrap gap-1 mb-3">
                            ${product.colors.map(color => `<span class="inline-block w-4 h-4 rounded-full" style="background-color: ${getColorCode(color)}" title="${color}"></span>`).join('')}
                        </div>
                        <button class="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 font-medium add-to-cart" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                `;

    productsContainer.appendChild(productCard);
});

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});
}

    // Get star rating HTML
    function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
}

    if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
}

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
}

    return stars;
}

    // Get color code for display
    function getColorCode(color) {
    const colors = {
    'Black': '#000000',
    'Blue': '#3b82f6',
    'Red': '#ef4444',
    'White': '#ffffff',
    'Pink': '#ec4899',
    'Gray': '#9ca3af',
    'Brown': '#92400e',
    'Beige': '#f5f5dc',
    'Green': '#10b981',
    'Orange': '#f97316',
    'Silver': '#c0c0c0',
    'Gold': '#d4af37'
};

    return colors[color] || '#cccccc';
}

    // Add to cart
    function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);

    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
    existingItem.quantity += 1;
} else {
    cart.push({
    ...product,
    quantity: 1
});
}

    updateCart();
    showCartNotification(product.name);
}

    // Update cart UI
    function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
                    <div class="text-center py-8 text-gray-500">
                        <i class="fas fa-shopping-cart text-4xl mb-2"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
} else {
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'flex items-center py-3 border-b border-gray-200';

    cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                        <div class="ml-4 flex-grow">
                            <h4 class="font-medium text-gray-800">${item.name}</h4>
                            <p class="text-gray-600">P${item.price.toFixed(2)}</p>
                            <div class="flex items-center mt-1">
                                <button class="text-gray-500 hover:text-indigo-600 change-quantity" data-id="${item.id}" data-change="-1">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="mx-2">${item.quantity}</span>
                                <button class="text-gray-500 hover:text-indigo-600 change-quantity" data-id="${item.id}" data-change="1">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button class="text-gray-500 hover:text-red-500 remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;

    cartItemsContainer.appendChild(cartItem);
});

    // Add event listeners to quantity buttons
    document.querySelectorAll('.change-quantity').forEach(button => {
    button.addEventListener('click', changeQuantity);
});

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', removeItem);
});
}

    // Update subtotal
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `P${subtotal.toFixed(2)}`;
}

    // Change item quantity
    function changeQuantity(e) {
    const productId = parseInt(e.target.closest('button').getAttribute('data-id'));
    const change = parseInt(e.target.closest('button').getAttribute('data-change'));

    const item = cart.find(item => item.id === productId);

    if (item) {
    item.quantity += change;

    // Remove item if quantity is 0 or less
    if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
}

    updateCart();
}
}

    // Remove item from cart
    function removeItem(e) {
    const productId = parseInt(e.target.closest('button').getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

    // Show cart notification
    function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center';
    notification.innerHTML = `
                <i class="fas fa-check-circle mr-2"></i>
                <span>${productName} added to cart</span>
            `;

    document.body.appendChild(notification);

    setTimeout(() => {
    notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    setTimeout(() => notification.remove(), 300);
}, 2000);
}

    // Toggle cart sidebar
    function toggleCart() {
    cartSidebar.classList.toggle('translate-x-full');
    cartOverlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    // Event listeners
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('hidden');
});

    mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
});
