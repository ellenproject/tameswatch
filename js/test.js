// $(function(){
//     var href = $(".header__nav__center>div>ul>li:has(ul)>a").attr('href');
//     $(".nav>ul>li:has(ul)>a").after('<a href="'+href+'"" class="menu-plus">+</a>');//第二層
//     $(".nav>ul>li>ul>li:has(ul)>a").after('<a href="'+href+'"" class="menu-plus">+</a>');//第三層

//     $(".nav>#nav-btn").click(function() {
//         $(".nav>ul").slideToggle();
//         return false;
//     });

//     $('.menu>li>.menu-plus').on('click', function(){
//           $(this).text(function(i, v) {
//             return v === '-' ? '+' : '-';
//         })
//          $(this).next('.sub-menu').slideToggle();
//          return false;
//      });

//     $('.sub-menu>li>a').on('click', function(){
//           $(this).text(function(i, v) {
//             return v === '-' ? '+' : '-';
//         })
//          $(this).next('.sub-menu').slideToggle();
//          return false;
//      });
// })

$(function(){
    var href = $(".header__nav__center>div>.header__nav__center--menu>.header__nav__center--menu--item:has(.header__nav__center--menu--item--select)>a").attr('href');
    $(".header__nav__center>.header__nav__center--menu>.header__nav__center--menu--item:has(.header__nav__center--menu--item--select)>a").after('<a href="'+href+'"" class="menu-plus">+</a>');//第二層
    $(".header__nav__center>.header__nav__center--menu>.header__nav__center--menu--item>.header__nav__center--menu--item--select>.header__nav__center--menu--item--select--list:has(.header__nav__center--menu--item--select)>a").after('<a href="'+href+'"" class="menu-plus">+</a>');//第三層

    $(".header__nav__center>#nav-btn").click(function() {
        $(".header__nav__center>.header__nav__center--menu").slideToggle();
        return false;
    });

    $('.header__nav__center--menu>.header__nav__center--menu--item>.menu-plus').on('click', function(){
          $(this).text(function(i, v) {
            return v === '-' ? '+' : '-';
        })
         $(this).next('.header__nav__center--menu--item--select').slideToggle();
         return false;
     });

    $('.header__nav__center--menu--item--select>.header__nav__center--menu--item--select--list>a').on('click', function(){
          $(this).text(function(i, v) {
            return v === '-' ? '+' : '-';
        })
         $(this).next('.header__nav__center--menu--item--select').slideToggle();
         return false;
     });
})