let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerview: 2,
        },
        568: {
            slidesPerview: 3,
        },
        768: {
            slidesPerview: 4,
        },
        968: {
            slidesPerview: 5,
        },
    }
  });

  // Swiper
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerview: 2,
        },
        568: {
            slidesPerview: 3,
        },
        768: {
            slidesPerview: 4,
        },
        968: {
            slidesPerview: 5,
        },
    },
  });

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");
});

document.querySelector(".loader").addEventListener("transitioned", () => {
    document.body.removeChild(document.querySelector(".loader"));
});