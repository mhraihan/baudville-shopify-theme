window.theme = {
  modalVideo: {
    init(n) {
      $(
        `.product-summary:nth-child(n + ${n + 1}) .js-video-button`
      ).modalVideo();
    },
  },
  quickview: {
    init() {
      var self = this;
      $(".button--quickview").on("click", function (event) {
        event.preventDefault();
        const url = $(this).data("url");

        window.theme.remodal.open();
        window.jQuery.ajax({
          url: url,
          type: "GET",
          dataType: "html",
          beforeSend: function () {},
          success: function (data) {
            window
              .jQuery(".show-loader .main-product")
              .append(window.jQuery(data).find(".product-main").html());
          },
          error: function (e) {
            console.log(e);
          },
          complete: function () {
            window.jQuery(".show-loader").toggleClass("opening opened");
            self.thumb();
            window.theme.zoomImage.init($(".show-loader .zoom"));
            history.pushState(null, null, " ");
          },
        });
      });
    },
    thumb() {
      $(".show-loader .thumb-image").off("click");
      $(".show-loader .thumb-image").on("click", function () {
        const el = $(".show-loader .main-product-image");
        $(this)
          .addClass("pointer-events-none")
          .siblings(".thumb-image")
          .removeClass("pointer-events-none");
        $(el)
          .attr("src", $(this).data("url"))
          .attr("alt", $(this).data("alt"))
          .closest(".zoom")
          .css("background-image", "url(" + $(this).data("zoom") + ")");
      });
    },
    unload() {
      $(".button--quickview").off("click");
    },
    reinit() {
      this.unload();
      this.init();
    },
  },
  zoomImage: {
    init($el) {
      $($el).off("mousemove");
      $($el).on("mousemove", function (e) {
        const zoomer = e.currentTarget;
        const offsetX = e.offsetX;
        const offsetY = e.offsetY;
        const x = (offsetX / zoomer.offsetWidth) * 100;
        const y = (offsetY / zoomer.offsetHeight) * 100;

        zoomer.style.backgroundPosition = x + "% " + y + "%";
      });
    },
  },
};
window.theme.remodal = $("[data-remodal-id=modal]").remodal();
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

  //quickview
  window.theme.quickview.init();
  // modal video
  $(`.js-video-button`).modalVideo();

  $(document).on("closed", ".remodal", function (e) {
    history.pushState(null, null, " ");
    window
      .jQuery(".show-loader")
      .toggleClass("opening opened")
      .find(".main-product")
      .html(null);
  });
});
