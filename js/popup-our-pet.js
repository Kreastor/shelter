"use strict"
const KatrineBox = document.querySelector('#Katrine-box');
const JenniferBox = document.querySelector('#Jennifer-box');
const WoodyBox = document.querySelector('#Woody-box');
const SophiaBox = document.querySelector('#Sophia-box');
const TimmyBox = document.querySelector('#Timmy-box');
const CharlyBox = document.querySelector('#Charly-box');
const ScarletBox = document.querySelector('#Scarlet-box');
const FreddieBox = document.querySelector('#Freddie-box');

const KatrinePage = document.querySelector('#Katrine-Outpets');
const JenniferPage = document.querySelector('#Jennifer-Outpets');
const SophiaPage = document.querySelector('#Sophia-Outpets');
const WoodyPage = document.querySelector('#Woody-Outpets');
const ScarlettPage = document.querySelector('#Scarlett-Outpets');
const TimmyPage = document.querySelector('#Timmy-Outpets');
const FreddiePage = document.querySelector('#Freddie-Outpets');
const CharlyPage = document.querySelector('#Charly-Outpets');


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
        document.body.classList.remove('_lock');
    });
}


KatrineBox.addEventListener("click", function (e) {
    KatrinePage.style="display:flex";
    document.body.classList.add('_lock');
});
JenniferBox.addEventListener("click", function (e) {
    JenniferPage.style="display:flex";
    document.body.classList.add('_lock');
});
WoodyBox.addEventListener("click", function (e) {
    WoodyPage.style="display:flex";
    document.body.classList.add('_lock');
});

SophiaBox.addEventListener("click", function (e) {
    SophiaPage.style="display:flex";
    document.body.classList.add('_lock');
});
TimmyBox.addEventListener("click", function (e) {
    TimmyPage.style="display:flex";
    document.body.classList.add('_lock');
});
CharlyBox.addEventListener("click", function (e) {
    CharlyPage.style="display:flex";
    document.body.classList.add('_lock');
});
ScarletBox.addEventListener("click", function (e) {
    ScarlettPage.style="display:flex";
    document.body.classList.add('_lock');
});
FreddieBox.addEventListener("click", function (e) {
    FreddiePage.style="display:flex";
    document.body.classList.add('_lock');
});












