document.addEventListener("DOMContentLoaded", function() {

   const button = document.querySelector(".dropdown-burger");
   const nav = document.querySelector(".menu-list");

   button.addEventListener("click", function() {
      button.classList.toggle("change");
      nav.classList.toggle("show");
   });

});