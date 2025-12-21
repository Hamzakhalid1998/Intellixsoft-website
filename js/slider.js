document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("card-slider");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  const gap = 24; // Tailwind gap-6 ≈ 24px
  let index = 0;
  let cardWidth;
  let visibleSlides;
  let autoSlideInterval;

  // Store the original HTML content of the slider
  const originalSliderContent = slider.innerHTML;

  function calculateVisibleSlides() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 1; // mobile
    if (screenWidth < 1024) return 2; // tablet
    return 4; // desktop
  }

  function updateCardWidth() {
    // Ensure the first child is a unique, non-cloned card for accurate width
    cardWidth = slider.children[0].offsetWidth + gap;
  }

  function cloneSlides() {
    // Remove existing clones before re-cloning
    const currentChildren = Array.from(slider.children);
    const uniqueSlidesCount = currentChildren.length / 3; // Assuming 3x for infinite loop

    // Remove any previous clones
    slider.innerHTML = originalSliderContent;
    const slides = Array.from(slider.children);

    // Clone for infinite loop
    slides.slice(0, visibleSlides).forEach((slide) => {
      slider.appendChild(slide.cloneNode(true));
    });
    slides.slice(-visibleSlides).reverse().forEach((slide) => { // Reverse for correct prepend order
      slider.insertBefore(slide.cloneNode(true), slider.firstChild);
    });
  }

  function updateSlider(transition = true) {
    slider.style.transition = transition ? "transform 0.5s ease-in-out" : "none";
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function initializeSlider() {
    // Reset to original content first to ensure unique cards are present for width calculation
    slider.innerHTML = originalSliderContent;

    visibleSlides = calculateVisibleSlides();
    updateCardWidth(); // Calculate width of a single, original card

    cloneSlides(); // Now clone based on the original cards

    // Set initial index to the first 'real' slide (after the prepended clones)
    index = visibleSlides;
    updateSlider(false); // No transition on initial load
  }

  function nextSlide() {
    index++;
    updateSlider();
    if (index >= slider.children.length - visibleSlides) {
      setTimeout(() => {
        index = visibleSlides; // Reset to the first 'real' slide
        updateSlider(false);
      }, 500); // Match transition duration
    }
  }

  function prevSlide() {
    index--;
    updateSlider();
    if (index < visibleSlides) {
      setTimeout(() => {
        // Reset to the last 'real' slide (before the appended clones)
        index = slider.children.length - visibleSlides * 2; // Total cards - (prepended + appended clones)
        updateSlider(false);
      }, 500); // Match transition duration
    }
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => nextSlide(), 3000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
  }

  // Event Listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoSlide(); // Restart auto-slide after manual interaction
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoSlide(); // Restart auto-slide after manual interaction
  });

  window.addEventListener("resize", () => {
    initializeSlider();
  });

  // Initialize on load
  initializeSlider();
  startAutoSlide();
});