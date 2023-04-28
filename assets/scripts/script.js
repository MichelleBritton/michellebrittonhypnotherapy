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
  Credit: https://www.w3schools.com/howto/howto_js_sidenav.asp
*/
/* Set the width of the side navigation to 100% */
function openNav() {
  document.getElementById("mobile-nav").style.width = "100%";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
}