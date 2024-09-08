document.addEventListener("DOMContentLoaded", function () {
  // Get all dropdown buttons
  const dropdownButtons = document.querySelectorAll(".dropdown button");

  // Add click event listener to each dropdown button
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the associated dropdown menu
      const dropdownMenu = this.nextElementSibling;

      // Toggle visibility of the dropdown menu
      dropdownMenu.classList.toggle("hidden");

      // Close other dropdowns
      dropdownButtons.forEach((otherButton) => {
        if (otherButton !== this) {
          const otherDropdownMenu = otherButton.nextElementSibling;
          otherDropdownMenu.classList.add("hidden");
        }
      });
    });
  });

  // Close dropdown menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      const dropdownMenus = document.querySelectorAll(".dropdown-menu");
      dropdownMenus.forEach((menu) => menu.classList.add("hidden"));
    }
  });
});
