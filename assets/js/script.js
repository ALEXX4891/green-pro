const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

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








