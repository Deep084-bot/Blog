const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const deleteForms = document.querySelectorAll(".delete-form");

deleteForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    
    if (!confirmDelete) {
      e.preventDefault();
    }
  });
});