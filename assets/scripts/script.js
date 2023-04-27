/* Toggle #cd div on Sessions & Fees Page 
   Credit: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */
function myFunction() {
    var x = document.getElementById("cd");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

/* Responsive Navigation 
  Credit: https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci */
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav ul");
const contactLink = document.querySelector("#contact-link");

hamburger.addEventListener("click", mobileMenu);
contactLink.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    contactLink.classList.remove("active");
}

