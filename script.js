document.addEventListener("DOMContentLoaded", function() {
  const switcher = document.getElementById("languageSwitcher");
  const sections = document.querySelectorAll(".lang");

  function setLanguage(lang) {
    sections.forEach(sec => {
      if (sec.classList.contains(lang)) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });
  }

  // default English
  setLanguage("en");

  switcher.addEventListener("change", function() {
    setLanguage(this.value);
  });

  // Slider functionality
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // auto change every 5 seconds
  setInterval(nextSlide, 5000);
});
