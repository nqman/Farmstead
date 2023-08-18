// CHANGE THEME TO DARK
var moon = document.getElementById("moon");
var light = document.getElementById("light");
moon.onclick = function () {
    var body = document.getElementById("body");
    body.className = "dark";
    moon.style.opacity = 0;
    moon.style.zIndex = -10;
    light.style.opacity = 1;
    light.style.zIndex = 10;
}
// CHANGE THEME TO LIGHT
light.onclick = function () {
    var body = document.getElementById("body");
    body.classList.remove("dark");
    light.style.opacity = 0;
    light.style.zIndex = -10;
    moon.style.opacity = 1;
    moon.style.zIndex = 10;
}
