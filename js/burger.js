const toggleBtn = document.querySelector('.navToggle')
const menu = document.querySelector('.header-menu')

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  const isOpen = toggleBtn.classList.toggle('navToggle-active')
  toggleBtn.setAttribute('aria-expanded', isOpen)
})