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

$(document).ready(function () {
  $(".collection__block li").click(function (e) {
    e.preventDefault();
    let item = $(this).data("item");
    $(`.collection__block-item--${item}`)
      .addClass("collection__block-item--active")
      .siblings()
      .removeClass("collection__block-item--active");
    $(`.showblock__item--${item}`)
      .addClass("showblock__item--active")
      .siblings()
      .removeClass("showblock__item--active");
  });
});

$(".search__item--right--account--button").on("click", function () {
  $(this).toggleClass("on");
  $(".search__item--right--account--dropdown").toggleClass("menu-show");
  // $(".menu-show").toggleClass('hidden');
});

function createSlick() {
  $(".slider")
    .not(".slick-initialized")
    .slick({
      centerMode: true,
      autoplay: true,
      dots: true,

      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
}

createSlick();
//Will not throw error, even if called multiple times.
$(window).on("resize", createSlick);

$(".banner__kv--full").slick({
  dots: true,
});

$(".carousel").carousel();

$(".carousel").carousel({
  interval: 2000,
});

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(25.0392579, 121.565848),
        zoom: 15,
    };
  var map = new google.maps.Map(document.getElementById("googlemap1"), mapProp);
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(25.0518657, 121.6045185),
        zoom: 15,
    };
  var map = new google.maps.Map(document.getElementById("googlemap2"), mapProp);
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(25.0415535, 121.5430141),
        zoom: 15,
    };
  var map = new google.maps.Map(document.getElementById("googlemap3"), mapProp);
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(25.0827427, 121.55639),
        zoom: 15,
    };
  var map = new google.maps.Map(document.getElementById("googlemap4"), mapProp);
}
