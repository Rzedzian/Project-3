document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.navbar')
    const navLink = document.querySelectorAll('.nav-link')
    const openNav = document.querySelector('.navbar-collapse')

    navLink.forEach(item => item.addEventListener('click', () => openNav.classList.remove('show')))

    function addShadow() {

        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)
    navLink.addEventListener('click', closeNavBurger)

})