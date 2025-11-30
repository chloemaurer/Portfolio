export function enableFullscreenImages() {
    // Récupère toutes les images du DOM
    const images = document.querySelectorAll<HTMLImageElement>("img");

    // Crée le conteneur du fullscreen s'il n'existe pas déjà
    let fullscreen = document.querySelector<HTMLDivElement>("#img-fullscreen");
    if (!fullscreen) {
        fullscreen = document.createElement("div");
        fullscreen.id = "img-fullscreen";
        fullscreen.classList.add("hidden");
        fullscreen.innerHTML = `
      <img id="img-fullscreen-content" />
    `;
        document.body.appendChild(fullscreen);
    }

    const fullscreenImg = fullscreen.querySelector<HTMLImageElement>("img");

    // Active le clic sur toutes les images
    images.forEach((img) => {
        img.style.cursor = "zoom-in";

        img.addEventListener("click", () => {
            if (!fullscreenImg) return;

            fullscreenImg.src = img.src;
            fullscreen?.classList.remove("hidden");
        });
    });

    // Clique pour fermer le fullscreen
    fullscreen.addEventListener("click", () => {
        fullscreen?.classList.add("hidden");
    });
}
