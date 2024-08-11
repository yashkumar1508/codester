const logregBox = document.querySelector('.logreg-box');
const registerLink = document.querySelector('.up');
const loginLink = document.querySelector('.in');

loginLink.addEventListener('click',() => {logregBox.classList.remove('active')} );
registerLink.addEventListener('click',() => {logregBox.classList.add('active')} );

const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropdownMenu = document.querySelector(".dropdown-menu")

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'bx bx-x'
    : 'bx bx-menu'
}