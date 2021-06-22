// ---------------- Preload
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut();
});


// popup seen product: show/hide
// $(document).click(function(){
//   $(".header_nav__content__list__item__seen-product").hide();
// });

// $(".header_nav__content__list--right .header_nav__content__list__item:first-child" ).click(function(event) {
//   // $(".header_nav__content__list__item__seen-product").show();
//   $(".header_nav__content__list__item__seen-product--has-product").show();
//   event.stopPropagation();
// });

var element = document.querySelector('.demo');
        var sildeshow = bamboo(element);


