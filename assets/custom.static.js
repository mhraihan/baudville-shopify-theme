console.log("does it work?");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  const imageSlider = new Swiper(".product-images-swiper", {
    // Optional parameters
    // spaceBetween: 0,

    loop: true,
    autoHeight: true,

    // enable auto height
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // Navigation arrows
    navigation: {
      nextEl: ".product-images-swiper .swiper-button-next",
      prevEl: ".product-images-swiper .swiper-button-prev",
    },
  });
});
