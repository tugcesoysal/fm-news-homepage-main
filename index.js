const webImage = document.querySelector(".web-image");
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".menu-icon")
const overlay = document.querySelector(".overlay");

function handleMobileDesign() {
  if (window.innerWidth < 760) {
    webImage.src = "assets/images/image-web-3-mobile.jpg";
    navbar.setAttribute("hidden", true)
    menuIcon.removeAttribute("hidden")
    
  } else {
    webImage.src = "assets/images/image-web-3-desktop.jpg";
    navbar.removeAttribute("hidden");
    menuIcon.setAttribute("hidden", true);
  }
}

handleMobileDesign();

window.addEventListener("resize", handleMobileDesign);

let isMenuOpen = false;

menuIcon.addEventListener("click", function () {
    if (isMenuOpen) {
        menuIcon.src = "assets/images/icon-menu.svg";
        navbar.setAttribute("hidden", true);
        navbar.classList.remove("menu");
        navbar.classList.add("navbar");
        overlay.style.opacity = 0;
    } else {
        menuIcon.src = "assets/images/icon-menu-close.svg";
        navbar.removeAttribute("hidden");
        navbar.classList.remove("navbar");
        navbar.classList.add("menu");
        overlay.style.opacity = 0.7;
    }
    isMenuOpen = !isMenuOpen;
});
