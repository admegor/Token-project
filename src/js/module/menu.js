const $burgerBtn = document.querySelector('.header__menu-burger');
const $nav = document.querySelector('.nav');
const $headerContainer = document.querySelector('.header__container');

$burgerBtn.addEventListener('click', function() {
    $burgerBtn.classList.toggle('active');
    $nav.classList.toggle('mobile-active');
    $headerContainer.classList.toggle('header__mobile-active');
})