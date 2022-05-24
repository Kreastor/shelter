

"use strict"
const KatrineBox = document.querySelector('.Katrine-box');
const JenniferBox = document.querySelector('.Jennifer-box');
const WoodyBox = document.querySelector('.Woody-box');
const SophiaBox = document.querySelector('.Sophia-box');
const TimmyBox = document.querySelector('.Timmy-box');
const CharlyBox = document.querySelector('.Charly-box');
const ScarlettBox = document.querySelector('.Scarlett-box');
const FreddieBox = document.querySelector('.Freddie-box');

const KatrinePage = document.querySelector('#Katrine');
const JenniferPage = document.querySelector('#Jennifer');
const SophiaPage = document.querySelector('#Sophia');
const WoodyPage = document.querySelector('#Woody');
const ScarlettPage = document.querySelector('#Scarlett');
const TimmyPage = document.querySelector('#Timmy');
const FreddiePage = document.querySelector('#Freddie');
const CharlyPage = document.querySelector('#Charly');

const slider = document.body.querySelector(".swiper");

const ClosePopupBTN = document.getElementsByClassName("pets-popup__close-button");
for(let i=0; i < ClosePopupBTN.length; i++) {
    ClosePopupBTN[i].addEventListener("click", function (e) {
        KatrinePage.style="display:none";
        JenniferPage.style="display:none";
        SophiaPage.style="display:none";
        WoodyPage.style="display:none";
        ScarlettPage.style="display:none";
        TimmyPage.style="display:none";
        FreddiePage.style="display:none";
        CharlyPage.style="display:none";
        slider.style="z-index:1";
        document.body.classList.remove('_lock');
    });
}

const SpaceClose = document.getElementsByClassName("pets-popup");
for(let i=0; i < SpaceClose.length; i++) {
    SpaceClose[i].addEventListener("click", function (e) {
        KatrinePage.style="display:none";
        JenniferPage.style="display:none";
        SophiaPage.style="display:none";
        WoodyPage.style="display:none";
        ScarlettPage.style="display:none";
        TimmyPage.style="display:none";
        FreddiePage.style="display:none";
        CharlyPage.style="display:none";
        slider.style="z-index:1";
        document.body.classList.remove('_lock');
    });
}

KatrineBox.addEventListener("click", function (e) {
    KatrinePage.style="display:flex";
    slider.style="z-index:0";
   
    document.body.classList.add('_lock');
});
JenniferBox.addEventListener("click", function (e) {
    JenniferPage.style="display:flex";
    slider.style="z-index:0";
    document.body.classList.add('_lock');
});
WoodyBox.addEventListener("click", function (e) {
    slider.style="z-index:0";
    WoodyPage.style="display:flex";
    document.body.classList.add('_lock');
});

SophiaBox.addEventListener("click", function (e) {
    slider.style="z-index:0";
    SophiaPage.style="display:flex";
    document.body.classList.add('_lock');
});
TimmyBox.addEventListener("click", function (e) {
    slider.style="z-index:0";
    TimmyPage.style="display:flex";
    document.body.classList.add('_lock');
});
CharlyBox.addEventListener("click", function (e) {
    slider.style="z-index:0";
    CharlyPage.style="display:flex";
    document.body.classList.add('_lock');
});
ScarlettBox.addEventListener("click", function (e) {
    slider.style="z-index:0";
    ScarlettPage.style="display:flex";
    document.body.classList.add('_lock');
});
FreddieBox.addEventListener("click", function (e) {
    slider.style="z-index:0";
    FreddiePage.style="display:flex";
    document.body.classList.add('_lock');
});








