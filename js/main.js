
const menuIcon = document.querySelector('#menu-icon')
const menuActive = document.querySelector('.menu-active')
let menuItem = [...document.querySelectorAll('.menu-item')]

menuIcon.addEventListener('click', function () {
    menuActive.classList.toggle('display-none')
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-times')
    } else if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.replace('fa-times', 'fa-bars')
    }
})


// console.log('dsafa');
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = () => {
        menuItem[i].classList.add('active-item')
    }
}


// console.log(menuIcon.classList.replace('fa-bars', 'fa-times'))

