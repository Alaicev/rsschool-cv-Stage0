let button = document.querySelector(".toggle-theme");
let doc = document.querySelector("body");

button.onclick = function () {
    doc.classList.toggle("light-theme")
    doc.classList.toggle("dark-theme")
}