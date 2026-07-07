const tabButtons = document.querySelectorAll(".tab-btn");
const categories = document.querySelectorAll(".menu-item-category");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    categories.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
