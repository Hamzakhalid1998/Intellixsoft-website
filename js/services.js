const stepItems = document.querySelectorAll("#steps li");
      const stepContents = document.querySelectorAll(".step-content");

      function activateStep(item) {
        const target = item.getAttribute("data-target");

        stepItems.forEach((li) => {
          li.classList.remove(
            "bg-gradient-to-r",
            "from-[#145B55]",
            "to-[#56A49E]"
          );
        });

        stepContents.forEach((content) => content.classList.add("hidden"));

        const activeContent = document.querySelector(`#${target}`);
        if (activeContent) {
          activeContent.classList.remove("hidden");
          activeContent.classList.add("animate-fadeIn");
        }

        item.classList.add(
          "bg-gradient-to-r",
          "from-[#145B55]",
          "to-[#56A49E]"
        );
      }

      window.addEventListener("DOMContentLoaded", () => {
        if (stepItems.length > 0) activateStep(stepItems[0]);
      });

      stepItems.forEach((item) => {
        item.addEventListener("click", () => activateStep(item));
      });

      const style = document.createElement("style");
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `;
      document.head.appendChild(style);