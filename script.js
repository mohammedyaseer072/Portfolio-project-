// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("#navMenu ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
