/* MOBILE MENU */
var menuButton = document.getElementById('js-menu-button'),
  menu = document.getElementById('js-menu'),
  body = document.body;

/* OPEN-CLOSE MOBILE MENU */
var controlMobileMenu = function () {
  if (menu.classList.contains('is-visible')) {
    menu.classList.remove('is-visible');
    body.classList.remove('no-scroll');
  } else {
    menu.classList.add('is-visible');
    body.classList.add('no-scroll');
  }
};

/* NAVIGATION MOBILE AND DESKTOP */
var navigation = function (e) {
  //Same value of media query change from mobile to desktop menu
  var responsiveMenuChange = 600;
  if (e.target.matches('a')) {
    //Menu items mobile behavior
    if (window.innerWidth < responsiveMenuChange) {
      controlMobileMenu();

      //Menu items desktop behavior
    } else {
      var anchor = e.target.getAttribute('href').substr(1);
      animateScroll(anchor, 800);
    }
  }
};

/************ EVENTS *************/

/* OPEN-CLOSE MOBILE MENU */
menuButton.addEventListener('click', controlMobileMenu);

/* NAVIGATION MOBILE AND DESKTOP */
menu.addEventListener('click', navigation);

//Add some pixels (40px) in the anchor navigation so it does not show on the edge
window.addEventListener('hashchange', function (e) {
  window.scrollTo(window.scrollX, window.scrollY - 40);
});
