"use strict"

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      1000:{
        slidesPerView: 3,
        SlidesPerGroup: 3,
      }  
    }
  });

//   gallery

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
     delay: 3000,
   },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },

    breakpoints:{
        1000:{
          slidesPerView: 1,
          SlidesPerGroup: 3,
        }  
      }
    
  });

  

  

