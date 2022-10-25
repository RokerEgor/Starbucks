let toggle = document.querySelector('#toggle-btn');
let body = document.querySelector('body');
toggle.onclick = function () {
    body.classList.toggle('dark');
}