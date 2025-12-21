
  // Select all FAQ buttons
  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling; // The div with the text
      const icon = btn.querySelector(".icon");

      // Close all others before opening a new one (optional)
      document.querySelectorAll(".faq-content").forEach((c) => {
        if (c !== content) {
          c.style.maxHeight = null;
          c.previousElementSibling.querySelector(".icon").textContent = "+";
        }
      });

      // Toggle this one
      if (content.style.maxHeight) {
        // Already open → close it
        content.style.maxHeight = null;
        icon.textContent = "+";
      } else {
        // Open it
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "–";
      }
    });
  });
