(function () {

  var body = document.querySelector('body')
  var navTrigger = document.getElementById('navTrigger')
  var mobileNav = document.getElementById('mobileNav')
  var navClose = document.getElementById('navClose')

  if (navTrigger) {
    navTrigger.addEventListener('click', function() {
      body.classList.add('nav-active')
      mobileNav.classList.remove('right-full')
      mobileNav.classList.add('left-0')
    })
  }

  if (navClose) {
    navClose.addEventListener('click', function() {
      body.classList.remove('nav-active')
      mobileNav.classList.remove('left-0')
      mobileNav.classList.add('right-full')
    })
  }

  // body.classList.add('nav-active')
  // mobileNav.classList.remove('right-full')
  // mobileNav.classList.add('left-0')

  if (document.getElementById("get-current-year")) {
    document.getElementById("get-current-year").innerHTML = new Date().getFullYear();
  }

})();
