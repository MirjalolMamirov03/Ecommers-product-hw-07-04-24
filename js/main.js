
const menuIcon = document.querySelector('#menu-icon')
const menuActive = document.querySelector('.menu-active')

menuIcon.addEventListener('click', function () {
    menuActive.classList.toggle('display-none')
    // menuIcon.classList.remove('fa-bars')
    // menuIcon.classList.add('fa-times')

    if (menuIcon.className == 'fas fa-bars') {
        menuIcon.className = 'fas fa-times'
    }else if (menuIcon.className == 'fas fa-times') {
        menuIcon.className = 'fas fa-bars'
    }
})

