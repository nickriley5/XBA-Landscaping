document.addEventListener("DOMContentLoaded", function () {
    let intro = document.getElementById("intro");
    let topBar = document.querySelector("#intro .top-bar");
    let bottomBar = document.querySelector("#intro .bottom-bar");
    let mainContent = document.getElementById("main-content");

    // ✅ INTRO ANIMATION (Plays on page load)
    setTimeout(() => {
        topBar.style.transform = "translateY(-100%)";
        bottomBar.style.transform = "translateY(100%)";

        setTimeout(() => {
            intro.style.opacity = "0";
            intro.style.transition = "opacity 0.8s ease-in-out";
        }, 700);

        setTimeout(() => {
            intro.style.display = "none";
            mainContent.style.display = "block";
            mainContent.classList.remove("hidden");
        }, 1500);
    }, 2000);
});

