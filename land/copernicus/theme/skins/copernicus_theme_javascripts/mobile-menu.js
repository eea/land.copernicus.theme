var navitems = Array.from(document.querySelectorAll('nav .nav.navbar-nav li'))
var navitemsWithChildren = navitems.filter(item => item.querySelector('.dropdown-menu'))
navitemsWithChildren.forEach((item, index) => {
  var mobileExpander = document.createElement('BUTTON')
  mobileExpander.classList = 'btn btn-primary btn-sm'
  mobileExpander.innerHTML = '+'
  mobileExpander.addEventListener('click', () => {
    var expanderStatus = mobileExpander.innerHTML
    if (expanderStatus === '+') {
      mobileExpander.innerHTML = '-'
    } else {
      mobileExpander.innerHTML = '+'
    }
    item.classList.toggle('expanded')
  })
  item.appendChild(mobileExpander);
})
