document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("#navbar-cta .main-nav-link"); // This selector is still fine

  // --- Scroll behavior (UNCHANGED) ---
  window.addEventListener("scroll", function () {
    if (window.scrollY > 650) {
      header.classList.add("bg-white", "shadow-md");
      header.classList.remove("bg-black");
      // Note: This part will only affect actual <a> tags, which is the desired behavior.
      navLinks.forEach((link) => {
        link.classList.remove("text-white", "hover:text-white");
        link.classList.add("text-black", "hover:text-black");
      });
    } else {
      header.classList.add("bg-black");
      header.classList.remove("bg-white", "shadow-md");
      navLinks.forEach((link) => {
        link.classList.remove("text-black", "hover:text-black");
        link.classList.add("text-white", "hover:text-white");
      });
    }
  });

  // --- Active link logic (REVISED) ---
  const path = window.location.pathname;
  const currentPage = path.split("/").pop() || "index.html";

  const servicePages = [
    "web-development.html",
    "app-development.html",
    "ai.html",
  ];
  const coursePages = [
    "web-development-course.html",
    "app-development-course.html",
  ];

  const navItems = document.querySelectorAll("#navbar-cta > ul > li");

  navItems.forEach((item) => {
    const underline = item.querySelector(".active-underline");
    if (!underline) return; // Skip if item has no underline div

    const link = item.querySelector("a"); // This may be null for "Courses", which is now OK
    let isActive = false;

    // Case 1: The item IS a standard link. Check if its href matches.
    // This handles Home, About, Services, etc.
    if (link && link.getAttribute("href")) {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        isActive = true;
      }
    }

    // Case 2: The item is the "Services" trigger. Check if a service page is active.
    if (
      item.id === "services-menu-trigger" &&
      servicePages.includes(currentPage)
    ) {
      isActive = true;
    }

    // Case 3: The item is the "Courses" trigger. Check if a course page is active.
    // This works even though there is no <a> tag inside.
    if (
      item.id === "courses-menu-trigger" &&
      coursePages.includes(currentPage)
    ) {
      isActive = true;
    }

    // Apply the active state if any condition was met
    if (isActive) {
      underline.style.width = "100%";
      underline.classList.remove("group-hover:w-full"); // Prevents hover conflict
    }
  });

  // --- Mobile menu toggle (UNCHANGED) ---
  const menuBtn = document.querySelector('[data-collapse-toggle="navbar-cta"]');
  const navbar = document.getElementById("navbar-cta");

  if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
      navbar.classList.toggle("hidden");
      // ... rest of mobile menu code
    });
  }
});
