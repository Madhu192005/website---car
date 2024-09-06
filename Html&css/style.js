var sidenav = document.querySelector(".side-navbar");

function showNavbar() {
    sidenav.style.left = "0"; // Slide the navbar in from the left
}

function closeNavbar() {
    sidenav.style.left = "-250px"; // Hide the navbar by moving it off-screen to the left
}
