let hiddenMenuDiv = document.getElementById("hidden-menu")
function jigyonaiyoMenuTrigger() {


  if (hiddenMenuDiv.style.display === "block") {
    hiddenMenuDiv.style.display = "none"

  } else {
    hiddenMenuDiv.style.display = "block"

  }


}





// mobile nav toggle icon

let navIcon = document.getElementById('nav-icon')
let navIconOpen = document.getElementById('nav-icon-open')
let navIconClosed = document.getElementById('nav-icon-closed')



// if (navIconOpen.className ="open") {
//   alert('open')
// } else {
//   alert('closed')
// }
navIcon.addEventListener('click', ()=>
  navIcon.classList.toggle('open')
)


