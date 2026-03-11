// MOBILE MENU

const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }

  });
}


// DELETE CONFIRMATION

const deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach((btn) => {

  btn.addEventListener("click", (e) => {

    const confirmDelete = confirm("Are you sure you want to delete this post?");

    if (!confirmDelete) {
      e.preventDefault();
    }

  });

});