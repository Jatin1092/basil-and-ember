// Mobile nav toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // close menu after clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Mark the current page's nav link as active
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Newsletter subscribe (front-end only demo)
const newsletterBtn = document.getElementById("newsletterBtn");
if (newsletterBtn) {
  newsletterBtn.addEventListener("click", () => {
    const input = document.getElementById("newsletterEmail");
    if (input && input.value.trim().length > 3 && input.value.includes("@")) {
      newsletterBtn.textContent = "Subscribed ✓";
      input.value = "";
      setTimeout(() => (newsletterBtn.textContent = "Subscribe"), 2500);
    } else {
      input.focus();
    }
  });
}
