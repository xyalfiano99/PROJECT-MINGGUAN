document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons and content boxes
  const tabButtons = document.querySelectorAll(".tab-btn");
  const contentBoxes = document.querySelectorAll(".content-box");

  // Initialize the default tab (Sejarah)
  const defaultTab = "sejarah";

  // Show the default content box and highlight the default tab
  document.getElementById(defaultTab).classList.remove("hidden");
  document.querySelector(`.tab-btn[data-target="${defaultTab}"]`).classList.add("text-blue-500", "border-blue-500");

  // Add click event listener to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the target content-box id from the button's data attribute
      const targetId = this.getAttribute("data-target");

      // Remove active class from all tab buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("text-blue-500", "border-blue-500");
        btn.classList.add("text-gray-600", "border-gray-300");
      });

      // Add active class to the clicked tab button
      this.classList.add("text-blue-500", "border-blue-500");

      // Hide all content boxes
      contentBoxes.forEach((box) => box.classList.add("hidden"));
      // Show the target content box
      document.getElementById(targetId).classList.remove("hidden");
    });
  });

  // Get menu button and menu
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");
  const closeMenuButton = document.getElementById("close-menu");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const desktopDropdown = document.getElementById("desktop-dropdown");
  const desktopMenuButton = document.getElementById("desktop-menu-button");

  // Function to open the menu
  function openMenu() {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
  }

  // Function to close the menu
  function closeMenu() {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
  }

  // Event listener to open menu
  menuButton.addEventListener("click", openMenu);

  // Event listener to close menu
  closeMenuButton.addEventListener("click", closeMenu);

  // Event listener to toggle mobile dropdown
  if (mobileMenuButton && mobileDropdown) {
    mobileMenuButton.addEventListener("click", () => {
      mobileDropdown.classList.toggle("scale-y-100");
      mobileDropdown.classList.toggle("scale-y-0");
    });
  }

  // Event listener to toggle desktop dropdown
  if (desktopMenuButton && desktopDropdown) {
    desktopMenuButton.addEventListener("click", () => {
      desktopDropdown.classList.toggle("hidden");
    });
  }
});
