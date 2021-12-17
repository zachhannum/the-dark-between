const sidenav = document.getElementById('sidenav');
const icon = document.getElementById('sidenav-icon');
const button = document.getElementById('sidenav-button')
button.onclick = function () {
    console.log("Clicked sidebar!");
    sidenav.classList.toggle('sidenav-collapse');
    icon.classList.toggle('fa');
    icon.classList.toggle('fa-angle-right');
    icon.classList.toggle('fa-angle-left');
}