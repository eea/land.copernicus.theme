$(document).ready(function(){
  /* sticky menu */
  $(function() {
    var div = $("nav.navbar-default");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        div.addClass("sticky");
      } else {
        div.removeClass("sticky");
      }
    });
  });
});
