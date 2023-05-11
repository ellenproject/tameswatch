$(function () {
  var href = $(
    ".nav__inner>.nav__inner__center>.nav__inner__center--menu>.nav__inner__center--menu--item:has(ul)>a"
  ).attr("href");
  $(
    ".nav__inner__center>.nav__inner__center--menu>.nav__inner__center--menu--item:has(ul)>a"
  ).after('<a href="' + href + '"" class="menu-plus">+</a>'); //第二層
  $(
    ".nav__inner__center>.nav__inner__center--menu>.nav__inner__center--menu--item>.nav__inner__center--menu--item--second>.nav__inner__center--menu--item--second--list:has(ul)>a"
  ).after('<a href="' + href + '"" class="menu-plus">+</a>'); //第三層

  $(".nav__inner__center>#nav-btn").click(function () {
    $(".nav__inner__center>.nav__inner__center--menu").slideToggle();
    return false;
  });

  $(".nav__inner__center--menu>.nav__inner__center--menu--item>.menu-plus").on(
    "click",
    function () {
      $(this).text(function (i, v) {
        return v === "-" ? "+" : "-";
      });
      $(this).next(".nav__inner__center--menu--item--second").slideToggle();
      return false;
    }
  );

  $().on("click", function () {
  // ".nav__inner__center--menu--item--second>.nav__inner__center--menu--item--second--list>a"
    $(this).text(function (i, v) {
      return v === "-" ? "+" : "-";
    });
    $(this).next(".nav__inner__center--menu--item--second").slideToggle();
    return false;
  });
});

$(".search__item--right--account--button").on("click", function () {
  $(this).toggleClass("on");
  $(".search__item--right--account--dropdown").toggleClass("menu-show");
  // $(".menu-show").toggleClass('hidden');
});

$(".priceTitle").on("click", function () {
  $(this).toggleClass("on");
  $(".priceContent").toggleClass("menu-show");
});

$(".functionTitle").on("click", function () {
  $(this).toggleClass("on");
  $(".functionChoosebox").toggleClass("menu-show");
});

$(".typeTitle").on("click", function () {
  $(this).toggleClass("on");
  $(".typeChoosebox").toggleClass("menu-show");
});

$(".purposeTitle").on("click", function () {
  $(this).toggleClass("on");
  $(".purposeChoosebox").toggleClass("menu-show");
});

$(".colorTitle").on("click", function () {
  $(this).toggleClass("on");
  $(".colorChoosebox").toggleClass("menu-show");
});

$(".banner__kv--full").slick({
  dots: true,
});

$(".carousel").carousel();

$(".carousel").carousel({
  interval: 2000,
});
