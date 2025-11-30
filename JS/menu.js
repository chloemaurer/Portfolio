
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("translate-x-full");
    mobileMenu.classList.toggle("translate-x-0");
  });

  // Fermer le menu après un clic sur un lien
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      mobileMenu.classList.add("translate-x-full");
    });
  });
