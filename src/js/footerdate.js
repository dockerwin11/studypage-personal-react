export function footerDate() {
    // Add date for footer
    const date = document.getElementById("date");
    date.innerHTML = new Date().getFullYear();
}