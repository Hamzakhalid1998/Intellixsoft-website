 const names = ["Emma", "Liam", "Sophia", "Noah", "Ava", "Oliver", "Isabella", "Ethan", "Mia", "James", "Amelia", "Lucas", "Charlotte", "Mason", "Harper"];

    // Assign random names to each tooltip
    document.querySelectorAll('.tooltip').forEach(tooltip => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      tooltip.textContent = randomName});