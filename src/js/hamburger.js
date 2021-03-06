window.onload = function () {
  // get the DOM elements for the hamburger menu and it's subcomponents
  const menu_btn = document.querySelector('.hamburger')
  const mobile_menu = document.querySelector('.mobile-nav')
  const a5 = document.getElementById('a5')
  const a6 = document.getElementById('a6')
  const a7 = document.getElementById('a7')
  const a8 = document.getElementById('a8')
  
  // toggle between active and inactive when the hamburger button is clicked and when it's links are clicked
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  })
  
  a5.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  })
  
  a6.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  })
  
  a7.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  })
  
  a8.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  })
}