//Theme Button Onclick  

const themeDropDownBtn = document.querySelector('#theme');
const themeDropDownList = document.querySelector('#theme-dropdown');

themeDropDownBtn.onclick = function () {
    themeDropDownList.classList.toggle("show-theme-dropdown");
};


// Greeting Interval with Delay

var arrSalute = new Array("Hello", "Xin Chào", "Bonjour", "안녕하세요", "Hola");
const elmSalute = document.querySelector("#greeting");
var arrIAm = new Array("I am", "Tôi là", "Je suis", "나는", "Yo soy");
const elemIam = document.querySelector("#iam");
intervalGreet(arrSalute, elmSalute);
intervalGreet(arrIAm, elemIam);
function intervalGreet(arr, elmArr) {
    displayGreetWithDelay();
    setInterval(displayGreetWithDelay, 1000 * arr.length);
    function displayGreetWithDelay() {
        arr.forEach((object, index) => {
            setTimeout(function () {
                elmArr.innerHTML = object;
            }, 1000 * index);
        });
    };
}

//Section Display and Navbar Effect when Scroll
scrollAnimation();
function scrollAnimation() {
    let section = document.querySelectorAll("section");
    let menu = document.querySelectorAll("#nav li a");
    let menuPink = document.querySelectorAll("#nav-pink li a");
    window.onscroll = () => {
        section.forEach((i) => {
            let top = window.scrollY; //which is the length or number of pixels the viewport has been scrolled
            let offset = i.offsetTop - 200; //is the length of the element from the top of the viewport
            let height = i.offsetHeight; // is the length of the sections
            let id = i.getAttribute("id"); //returns the value of an elements attributes, in this case, the id of the sections.
            if (top >= offset && top < offset + height) {
                document
                    .querySelector("#" + id)
                    .classList.add("fade--active");
                menu.forEach((link) => {
                    link.classList.remove("nav--active");
                    document
                        .querySelector("#nav li a[href*=" + id + "]")
                        .classList.add("nav--active");
                });
                menuPink.forEach((link) => {
                    link.classList.remove("nav--active-pink");
                    document
                        .querySelector("#nav-pink li a[href*=" + id + "]")
                        .classList.add("nav--active-pink");
                });
            } else {
                document
                    .querySelector("#" + id)
                    .classList.remove("fade--active");
            }
        });
    };
}

//Navbar Button Onclick 

const navDropDownBtnBlue = document.querySelector('#nav-btn--toggle');
const navDropDownBlue = document.querySelector('#nav ul');
const navDropDownIconBlue = document.querySelectorAll('#nav-btn--toggle i');

const navDropDownBtnPink = document.querySelector('#nav-btn--toggle-pink');
const navDropDownPink = document.querySelector('#nav-pink ul');
const navDropDownIconPink = document.querySelectorAll('#nav-btn--toggle-pink i');

navBtnOnClick(navDropDownBtnBlue, navDropDownBlue, navDropDownIconBlue);
navBtnOnClick(navDropDownBtnPink, navDropDownPink, navDropDownIconPink);
function navBtnOnClick(navDropDownBtn, navDropDown, navDropDownIcon) {
    navDropDownBtn.onclick = function () {
        navDropDown.classList.toggle("display-flex");
        navDropDownIcon.forEach((i) => {
            if (i.getAttribute("class").includes("display-block")) {
                i.classList.remove("display-block");
                i.classList.add("display-none");
            }
            else if (i.getAttribute("class").includes("display-none")) {
                i.classList.add("display-block");
                i.classList.remove("display-none");
            }
        });

    };
}

// Expand card

const expandButtonHTMLCSS = document.querySelector('#html-css-expand-button');
const expandDropdownHTMLCSS = document.querySelector('#html-css-skill-content-container');
const rotateIconHTMLCSS = document.querySelector('#html-css-expand-button-icon');
expandButtonOnClick(rotateIconHTMLCSS, expandButtonHTMLCSS, expandDropdownHTMLCSS);

const expandButtonJS = document.querySelector('#js-expand-button');
const expandDropdownJS = document.querySelector('#js-skill-content-container');
const rotateIconJS = document.querySelector('#js-expand-button-icon');
expandButtonOnClick(rotateIconJS, expandButtonJS, expandDropdownJS);

const expandButtonreact = document.querySelector('#react-expand-button');
const expandDropdownreact = document.querySelector('#react-skill-content-container');
const rotateIconreact = document.querySelector('#react-expand-button-icon');
expandButtonOnClick(rotateIconreact, expandButtonreact, expandDropdownreact);


function expandButtonOnClick(rotate, expand, dropdown) {
    expand.onclick = function () {
        rotate.classList.toggle("show-expand-button-icon");
        expand.classList.toggle("show-expand-button");
        dropdown.classList.toggle("show-skill-content-container");
    };
}




