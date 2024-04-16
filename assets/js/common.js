document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    menuOpenIcon = document.querySelector(".nav__icon-menu"),
    menuCloseIcon = document.querySelector(".nav__icon-close"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme"),
    portfolioViewButton = document.querySelector('.portfolio__toggle'),
    btnScrollToTop = document.querySelector(".top");


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* ==========================
  // Lightbox Gallery
  ========================== */
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    moreLength: 0,
    autoplayVideos: true
  });


  /* =================================
  // Smooth scroll to the tags page
  ================================= */
  document.querySelectorAll(".tag__link").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

});

const menuLabel = document.querySelector(".menu-label");
const menuLinks = document.querySelector(".menu-links");
let menuLinkShow = false;

menuLabel.addEventListener("click", () => {
  console.log("a");
  if (!menuLinkShow) {
    menuLinks.classList.add("menu-links-show");
    menuLinkShow = true;
  } else {
    menuLinks.classList.remove("menu-links-show");
    menuLinkShow = false;
  }
});

$(document).ready(function() {
  $("#cssmenu li").on("click", function() {
      $("#cssmenu li").removeClass("active");
      $(this).addClass("active");
  });
});