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

// xoay rotate của affter trong option
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

// select-option
$(document).ready(function(){
    var optionList = ["Căn hộ", "Nhà phố","Shophouse","Biệt thự"];
    $("#placeholder-typing").select2({
        data:optionList
    });
});
$(document).ready(function(){
    var optionList1 = ["TP. Hồ Chí Minh"];
    $("#placeholder-typing1").select2({
        data:optionList1
    });
});
$(document).ready(function(){
    var optionList2 = ["Quận 1","Quận 2","Quận 9"];
    $("#placeholder-typing2").select2({
        data:optionList2
    });
});
$(document).ready(function(){
    var optionList3 = ["50 - 80 triệu/m2","80 - 120 triệu/m2","120 - 160 triệu/m2",">200 triệu/m2"];
    $("#placeholder-typing3").select2({
        data:optionList3
    });
});