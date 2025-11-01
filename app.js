
document.addEventListener('DOMContentLoaded', () => {

  
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if(i === index) slide.classList.add('active');
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

   
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);

    showSlide(currentIndex);

   
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });



    // =======================
// Cart Functionality
// =======================
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const addToCartBtns = document.querySelectorAll('.add-to-cart');

let cart = [];

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('p').innerText.replace('$', ''));
        
        // Add item to cart
        cart.push({ title, price });
        updateCart();
    });
});

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerText = `${item.title} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });
    cartTotal.innerText = total.toFixed(2);
}

// Open and close cart modal
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});



});

