export function humBurger() {
// HumBurger button link
const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");


navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
}