const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('navbars');

menuBtn.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
    } else {
        navLinks.classList.add('show');
        menuBtn.innerHTML = '<i class="ri-close-fill"></i>';
    }
});