"use strict";

function openModal(o) {
  $("#" + o).fadeIn("fast"), $("body").addClass("u-overflow-hidden");
}function closeModal() {
  $(".c-modal").fadeOut("fast"), $("body").removeClass("u-overflow-hidden");
}function bindModalTrigger() {
  $(".js-modal-trigger").click(function (o) {
    var e = $(this).data("modal");closeModal(), openModal(e), o.preventDefault();
  }), $(".c-modal").click(function () {
    closeModal();
  }).children().click(function (o) {
    o.stopPropagation();
  }), $(".js-modal-close").click(function (o) {
    closeModal(), o.preventDefault();
  });
}function checkModalInitialStatus() {
  $(".c-modal").hasClass("is-active") && $("body").addClass("u-overflow-hidden");
}var mma = 0;function bindMenuTrigger() {
  $(this).scrollTop();$(".js-drawer-trigger").click(function () {
    mma = 0 == mma ? ($(".js-drawer-menu").addClass("is-active"), $("body").addClass("u-overflow-hidden"), 1) : ($(".js-drawer-menu").removeClass("is-active"), $("body").removeClass("u-overflow-hidden"), 0);
  });
}function toggleTrigerMenu() {
  var o = $(".js-hamburger");o.on("click", function () {
    o.toggleClass("is-active");
  });
}function stickyFooter() {
  var o = $(".js-header").outerHeight(),
      e = $(".js-footer").outerHeight();$(".js-content").css({ "padding-top": o, "padding-bottom": e }), $(".js-drawer-content").css({ "padding-top": o }), $(".js-footer").css({ "margin-top": -e });
}function accordion(o, e) {
  $(o).on("click", e, function () {
    $(this).toggleClass("is-active").next().slideToggle(), $(o).addClass("is-active");
  });
}function scrollToId(o) {
  $(o).click(function (o) {
    o.preventDefault();var e = $($(this).attr("href")).offset().top;$("body, html").animate({ scrollTop: e });
  });
}function preventive(o) {
  $(o).click(function (o) {
    o.preventDefault();
  });
}function hideHeader() {
  var i = $(".js-header"),
      a = 0,
      c = 0;$(document).on("scroll", function (o) {
    var e = $(document).scrollTop(),
        t = e - c,
        n = i.height();n < a + t ? a = n : e < 0 ? a = 0 : a += t, a = a < 0 ? 0 : a, i.css("top", -a + "px"), c = e;
  });
}function gotopButton(o, e) {
  var t = $(o),
      n = $(window),
      i = -1;$(document).on("scroll", function () {
    i && window.clearTimeout(i), i = window.setTimeout(function () {
      n.scrollTop() < 100 ? t.removeClass(e) : t.addClass(e);
    }, 100);
  });
}$(document).ready(function () {
  checkModalInitialStatus(), bindModalTrigger(), toggleTrigerMenu(), bindMenuTrigger(), stickyFooter(), scrollToId(".js-gotop, .js-faqlist"), preventive(".js-prevent"), hideHeader(), gotopButton(".js-gotop", "is-active"), accordion(".js-accor", ".js-accor-header");
});