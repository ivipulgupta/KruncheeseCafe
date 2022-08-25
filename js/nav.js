
/**
@author Zhoha Damani <zdamani0121@conestogac.on.ca>
@student id : 8730121
@Group Number : 9
*/

 /********* Toggle function for Navbar element **************/

const navToggle = document.querySelector(".nav-toggle"); // selecting the toggle button
const links = document.querySelector(".links"); // selecting links

 //After DOM is loaded
$(document).ready(() => {

  // adding an event listener to the click of hamburger
navToggle.addEventListener("click", function () {


  // console.log(links.classList); // for reference
  links.classList.toggle("show-links"); //toggle class list to show/ display the navbar
  
});


});
