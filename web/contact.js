const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // No backend yet — this just confirms the form works.
    // Wire this up to an API endpoint or a service like Formspree when ready.
    formStatus.classList.add("show");
    contactForm.reset();
  });
}
