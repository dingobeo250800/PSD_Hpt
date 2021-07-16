$(document).ready(function () {
    $(".header-bar").click(function () {
        $(".menu-mobile").addClass('active');
        $(".overlay").addClass('overlay-block');
    });
    $(".overlay").click(function () {
        $(".active").removeClass("active");
        $(".overlay").removeClass('overlay-block');
    });
    $(".menu-mobile__close").click(function () {
        $(".menu-mobile").removeClass("active");
        $(".overlay").removeClass('overlay-block');
    });


    $(".menu-mobile ul li.menu-item-has-children>ul").before(`<span class="li-plus"></span>`);
    $(".menu-mobile ul li.current-menu-parent.menu-item-has-children .li-plus").addClass("clicked");

    if ($(".li-plus").length) {
        $(".li-plus").click(function (e) {
            if ($(this).hasClass("clicked")) {
                $(this).removeClass("clicked").next("ul").slideUp(500);
            } else if ($(this).parents().siblings("a").hasClass("clicked")) {
                $(this).addClass("clicked").next("ul").slideDown(500);
            } else {
                $(this).addClass("clicked").next("ul").slideDown(500);
            }
        });
    }
});

$(document).ready(function () {
    $('.new-list__sileToggle').click(function () {
        $(this).parent().find('.new-list').toggle(500);
        $(this).toggleClass('active1');
    });
});

// animation onScoll
window.addEventListener("scroll", function(){
    var header = document.getElementById("header");
    var headerTop = document.getElementById("header-top");
    header.classList.toggle("header-active", window.scrollY > 300);
    headerTop.classList.toggle("headerTop-none", window.scrollY > 100);
})


//CodePen Home Back to Top Button

var btnBack = $('#item__btn-back');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnBack.addClass('show');
  } else {
    btnBack.removeClass('show');
  }
});

btnBack.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
