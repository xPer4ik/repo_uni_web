const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const scrollTopButton = document.getElementById("scrollTop");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", !expanded);
  mainNav.classList.toggle("active");
  document.body.style.overflow = mainNav.classList.contains("active")
    ? "hidden"
    : "";
});

document.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
