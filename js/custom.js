function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("links", "components/links.html");
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
loadComponent("scripts", "components/scripts.html");

window.addEventListener("load", function () {

    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.3s ease";

    const preloader = document.querySelector(".preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 300);
    }
});