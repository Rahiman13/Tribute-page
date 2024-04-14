const carousel = document.getElementById('carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    const itemWidth = items[0].offsetWidth + 16; // Width of item + margin-right
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

const intervalId = setInterval(nextSlide, 5000);

carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
carousel.addEventListener('mouseleave', () => intervalId = setInterval(nextSlide, 5000));





