const iconMenu = document.querySelector('.menu__burger');
const iconMenuActive = document.querySelector('.burger-inner__burger-container');

const BurgerBody = document.querySelector('.burger-inner');
const menuBody = document.querySelector('.burger-inner__container');

const linkHelp = document.getElementById('LinkHelp320');
const linkContacts = document.getElementById('LinkContacts320');



iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.add("_rotatoOpen");
    document.body.classList.add('_lock');
    BurgerBody.classList.add("_showBlock");
    menuBody.classList.add("_active");
});

document.querySelector('.burger-inner__comeback').addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove("_rotatoOpen");
    setTimeout(() => BurgerBody.classList.remove("_showBlock"),300);
    setTimeout(() => menuBody.classList.remove("_active"),200);
})

iconMenuActive.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove("_rotatoOpen");
    iconMenuActive.classList.add("_rotatoClose");
    setTimeout(() => BurgerBody.classList.remove("_showBlock"),200);
});

linkHelp.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove("_rotatoOpen");
    BurgerBody.classList.remove("_showBlock")
    menuBody.classList.remove("_active");
});

linkContacts.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove("_rotatoOpen");
    BurgerBody.classList.remove("_showBlock")
    menuBody.classList.remove("_active");
});


