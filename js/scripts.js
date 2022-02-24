// $(function() {
//     $(".slider").slick()
// })
new Swiper(".swiper", {
    navigation: {
        nextEl: ".btns__btn_next",
        prevEl: ".btns__btn_prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centeredSlides: true,
    loop: true,
    loopSlides: 5,
    spaceBetween: 32,
    initialSlide: 1,
    speed: 800,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    parallax: true,
},);

// спойлеры
let dropDownList = document.querySelectorAll(".dropdown-list");
let spoiler = document.querySelectorAll(".list-header__arrow-down");

for (let i = 0; i < spoiler.length; i++) {
    spoiler[i].addEventListener("click", function() {
        dropDownList[i].classList.toggle("active");
    });
}

// бургер
let burger = document.querySelector(".header__burger");
let headerList = document.querySelector(".header__list");
let body = document.querySelector("body");
let nav = document. querySelector(".header__nav");

burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    headerList.classList.toggle("active");
    body.classList.toggle("lock");
    nav.classList.toggle("active");
    for (let i = 0; i < spoiler.length; i++) {
        dropDownList[i].classList.remove("active");
    }
})

let burgerMobile = document.querySelector(".header-mobile__burger");
let headerBody = document.querySelector(".header__body");

burgerMobile.addEventListener("click", function() {
    headerBody.classList.toggle("active");
    burgerMobile.classList.toggle("active");
    for (let i = 0; i < spoiler.length; i++) {
        dropDownList[i].classList.remove("active");
    }
})