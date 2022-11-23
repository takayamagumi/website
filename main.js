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


navIcon.addEventListener('click', ()=>
  navIcon.classList.toggle('open')
)
navIcon.addEventListener('click', function(){
  if(navIcon.className === '') {
    navIconOpen.style.display = 'flex'
    navIconClosed.style.display = 'none'
}else {
  navIconOpen.style.display = 'none'
  navIconClosed.style.display = 'flex'
}
});



