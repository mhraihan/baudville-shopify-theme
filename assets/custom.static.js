window.addEventListener("DOMContentLoaded", (event) => {
  const imageSlider = new Swiper(".product-images-swiper", {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: ".product-images-swiper .swiper-button-next",
      prevEl: ".product-images-swiper .swiper-button-prev",
    },
  });
  new Swiper(".brand-images-swiper", {
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".brand-images-swiper .swiper-button-next",
      prevEl: ".brand-images-swiper .swiper-button-prev",
    },
  });
});
