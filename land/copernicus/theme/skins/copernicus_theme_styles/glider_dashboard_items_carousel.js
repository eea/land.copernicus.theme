var dashboard_items = document.getElementsByClassName("dashboard-item");
var container_width = document.getElementsByClassName("main")[0].offsetWidth;

if(dashboard_items.length > 2 && (dashboard_items.length * 150 > container_width)) {
  document.getElementsByClassName("glider-prev")[0].style.display = '';
  document.getElementsByClassName("glider-next")[0].style.display = '';

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 6,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
}
