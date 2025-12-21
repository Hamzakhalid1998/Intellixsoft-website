

// Testimonials Data
const testimonials = [
  {
    text: "We worked with Intellix Soft for web development, and the results were impressive. Our website became faster, more engaging, and perfectly aligned with our goals.",
    author: "David Lee",
  },
  {
    text: "We hired Intellix Soft for web development and within a few months, our website transformed completely. The design was modern, responsive, and focused on real performance.",
    author: "Emily Rodriguezee",
  },
  {
    text: "We worked with Intellix Soft for business development, and the results were outstanding. Our strategy became clearer, more effective, and perfectly aligned with our vision.",
    author: "Sarah K.",
  },
  {
    text: "We worked with Intellix Soft for Python development, and the experience was excellent. Our application became faster, more stable, and perfectly optimized for performance.",
    author: "John Carter",
  },
  {
    text: "We worked with Intellix Soft for graphic design, and the results were outstanding. Our visuals became sharper, more creative, and perfectly matched our brand style.",
    author: "Sophia M.",
  },
];

const cardsContainer = document.getElementById("cards-container");
const radios = document.querySelectorAll(".radio-btn");

let activeIndex = 0; // Start at first testimonial

function renderCards(centerIndex) {
  cardsContainer.innerHTML = "";

  // Calculate indexes [left, center, right]
  const leftIndex =
    (centerIndex - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (centerIndex + 1) % testimonials.length;

  const indexes = [leftIndex, centerIndex, rightIndex];

  indexes.forEach((i) => {
    const { text, author } = testimonials[i];
    const card = document.createElement("div");
    card.className =
      "flex flex-col shadow-lg   rounded-lg p-6 bg-gradient-to-r from-[#145B55] to-[#56A49E]";

    card.innerHTML = `
        <p class="text-white font-medium text-base md:text-lg mb-4">${text}</p>
        <h3 class="text-white font-bold text-lg md:text-xl text-center">${author}</h3>
      `;
    cardsContainer.appendChild(card);
  });

  // Sync radios
  radios.forEach((radio, idx) => {
    radio.checked = idx === centerIndex;
  });
}

// Initial render
renderCards(activeIndex);

// Auto-slide every 3 seconds
setInterval(() => {
  activeIndex = (activeIndex + 1) % testimonials.length;
  renderCards(activeIndex);
}, 3000);
