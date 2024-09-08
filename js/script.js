document.addEventListener("DOMContentLoaded", function () {
  // Mengambil semua elemen dropdown
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    // Menambahkan event listener pada setiap tombol dropdown
    dropdown.addEventListener("click", function () {
      // Mengambil elemen menu dropdown terkait
      const menu = this.querySelector(".dropdown-menu");

      // Toggle class 'hidden' untuk menampilkan atau menyembunyikan menu
      menu.classList.toggle("hidden");
    });

    // Menambahkan event listener pada document untuk menutup dropdown jika klik di luar
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        // Menyembunyikan menu jika klik di luar dropdown
        const menu = dropdown.querySelector(".dropdown-menu");
        menu.classList.add("hidden");
      }
    });
  });
});
