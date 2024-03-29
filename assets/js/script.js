// $(document).ready(function(){
//   $(".hamburger").click(function(){
//     $(this).toggleClass("is-active");
//   });
// });

burder = document.querySelector(".burger");
menu = document.querySelector(".header__nav");


burder.addEventListener("click", function(){
  this.classList.toggle("burger_active");
  menu.classList.toggle("header__nav_active");
});






