
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

});
