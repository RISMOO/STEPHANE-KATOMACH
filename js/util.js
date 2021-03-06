function typeWrite(e) {
  const t = e.innerHTML.split("");
  (e.innerHTML = " "),
    t.forEach(function (t, n) {
      setTimeout(function () {
        e.innerHTML += t;
      }, 75 * n);
    });
}
function scrollFunction() {
  document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
    ? $(".header").css("backgroundColor", "#000000")
    : $(".header").css("backgroundColor", "transparent");
}
$(document).ready(function () {
  $("#loader").hide(),
    $("#content").show(),
    typeWrite(document.querySelector(".profession")),
    AOS.init();
}),
  (window.onscroll = function () {
    scrollFunction();
  }),
  $(".btn_menu").click(function () {
    $(".btn_menu").fadeOut("fast"), $(".nav_menu").fadeIn("fast");
  }),
  $(".close_btn").click(function () {
    $(".nav_menu").fadeOut("fast"), $(".btn_menu").fadeIn("fast");
  }),
  $(".a_menu").click(function () {
    $(".nav_menu").fadeOut("fast"), $(".btn_menu").fadeIn("fast");
  });
var modalImage = document.getElementById("modal_image");
modalImage.addEventListener("show.bs.modal", function (e) {
  var t = e.relatedTarget.getAttribute("data-image");
  (document.getElementById("modal_img").src = t),
    (document.getElementById("modal_img2").src = t);
});
var modalVideo = document.getElementById("modal_video");
modalVideo.addEventListener("show.bs.modal", function (e) {
  var t = e.relatedTarget.getAttribute("data-video");
  document.getElementById("modal_video_iframe").src = t;
}),
  modalVideo.addEventListener("hidden.bs.modal", function (e) {
    document.getElementById("modal_video_iframe").src = "";
  }),
  $(document).ready(function () {
    $(".testimonial_container").owlCarousel({
      loop: !0,
      center: !0,
      items: 1,
      autoplay: !0,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !0,
    });
  });
