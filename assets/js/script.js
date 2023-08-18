const body = document.getElementsByTagName("body")[0];
const containers = document.querySelectorAll(".container-outer");
// const header = document.querySelector(".header");
const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".header__menu");

let scrollbarWidth = Math.min(getScrollbarWidth(), window.innerWidth - body.offsetWidth);
let containersMarginRight = parseInt(window.getComputedStyle(containers[0], null).getPropertyValue("margin-right"));

menuIcon.addEventListener("click", openMenu);

function openMenu() {
    if (scrollbarWidth) {
        containers.forEach(container => {
            container.style.marginRight = containersMarginRight + scrollbarWidth + "px";
        });
    }

    menu.classList.add("_active");
    menuIcon.classList.add("_active");
    body.classList.add("_active");

    menuIcon.removeEventListener("click", openMenu);
    menuIcon.addEventListener("click", closeMenu);
}

function closeMenu() {
    menu.classList.remove("_active");
    menuIcon.classList.toggle("_active");
    body.classList.remove("_active");
    if (scrollbarWidth) {
        containers.forEach(container => {
            container.style.marginRight = "";
        }); 
    }
    menuIcon.removeEventListener("click", closeMenu);
    menuIcon.addEventListener("click", openMenu);
}

function getScrollbarWidth () {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollbarWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollbarWidth;
}