document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 5,
    autoplay: {
      delay: 5000,
    },
  });
});