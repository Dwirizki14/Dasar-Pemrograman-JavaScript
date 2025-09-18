// Slider Galeri
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length; // loop
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Tombol next
nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
});

// Tombol prev
prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
});

// Auto slide tiap 3 detik
setInterval(() => {
  showSlide(index + 1);
}, 5000);
