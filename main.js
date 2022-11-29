let hiddenMenuDiv = document.getElementById("hidden-menu")
function jigyonaiyoMenuTrigger() {
  if (hiddenMenuDiv.style.display === "block") {
    hiddenMenuDiv.style.display = "none"
  } else {
    hiddenMenuDiv.style.display = "block"
  }
}

let hiddenMenuDivMobile = document.getElementById("hidden-menu-mobile")
function jigyonaiyoMenuTriggerMobile(){
  if (hiddenMenuDivMobile.style.display === "block") {
    hiddenMenuDivMobile.style.display = "none"
  } else {
    hiddenMenuDivMobile.style.display = "block"
  }
}




// mobile nav toggle icon

let navIcon = document.getElementById('nav-icon')
let navIconOpen = document.getElementById('nav-icon-open')
let navIconClosed = document.getElementById('nav-icon-closed')
let mobileMenuContainer = document.getElementById('mobile-menu-container')



navIcon.addEventListener('click', ()=>
  navIcon.classList.toggle('open')
)
navIcon.addEventListener('click', function(){
  if(navIcon.className === '') {
    navIconOpen.style.display = 'flex'
    navIconClosed.style.display = 'none'
    mobileMenuContainer.style.display = 'none'
}else {
  navIconOpen.style.display = 'none'
  navIconClosed.style.display = 'flex'
  mobileMenuContainer.style.display = 'block'
}
});


let menuIconsMobile = document.getElementsByClassName('menu-icons-mobile')
let mobileMenuLink = document.getElementsByClassName('mobile-menu-link')

for (let i = 0; i < mobileMenuLink.length; i++) {
  mobileMenuLink[i].addEventListener('click', function(){
  // alert('test')
  if(menuIconsMobile.className === 'flex') {
    menuIconsMobile.style.display = 'none'
}else {
  menuIconsMobile.style.display = 'flex'
}
});
}

// Get the button:
let goToTopBtn = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}