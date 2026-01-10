// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close menu when a link is clicked (mobile UX)
    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("show");
        }
    });
}
