'use strict';

let parentsImage = document.querySelectorAll('.ibg');

for (const elem of parentsImage) {
    let imgSrc = elem.firstElementChild.getAttribute('src');
    elem.firstElementChild.classList.add('hidden');

    elem.style.backgroundImage = `url('${imgSrc}')`;
    elem.classList.add('imageFit');
}


const parentSlider = document.querySelector('.slider');
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const sliderContainer = parentSlider.querySelector('.slider__container');
const sliderBody = parentSlider.querySelector('.slider__body');
const sliderItems = parentSlider.querySelectorAll('.slider__item');
const itemsCount = sliderItems.length;
const btnPrev = parentSlider.querySelector('.btn-prev');
const btnNext = parentSlider.querySelector('.btn-next');
let itemWidth = sliderContainer.offsetWidth / slidesToShow;
let movePosition = itemWidth * slidesToScroll;
const radioBlock = parentSlider.querySelector("form");
let counter = 0;
const timeForAChange = 3000;
let timerId;

// sliderItems.forEach(function(elem) {
//     elem.style.minWidth = `${itemWidth}px`;
// });


//add radio buttons
function addRadio() {
    for (let i = 0; i < itemsCount / slidesToScroll; i++) {
        let radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'slider-buttons';
        radioButton.id = i;
        radioButton.value = i;
        radioBlock.appendChild(radioButton);
    }
};

function checkWidth() {
    itemWidth = sliderContainer.offsetWidth / slidesToShow;
    position = 0;
    movePosition = itemWidth * slidesToScroll;
    sliderBody.style.transform = `translateX(0px)`;
    radioBlock.children[0].checked = true;
    counter = 0;
    sliderItems.forEach(function(elem) {
        elem.style.minWidth = `${itemWidth}px`;
    });
}


function next() {
    const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    counter += slidesToScroll;
    if (radioBlock.children[counter / slidesToScroll]) {
        radioBlock.children[counter / slidesToScroll].checked = true;
    }
    setPosition();
    checkPosition();
}

function prev() {
    const itemLeft = Math.abs(position) / itemWidth;
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    counter -= slidesToScroll;
    if (radioBlock.children[counter / slidesToScroll]) {
        radioBlock.children[counter / slidesToScroll].checked = true;
    }
    if (counter < 0) {
        counter = 0;
    }
    setPosition();
    checkPosition();
}


// function paused() {
//     this.removeEventListener('click', paused);
//     clearInterval(timerId);
//     clearTimeout(pausedId);
//     return pausedId = setTimeout(function() {
//         clearInterval(timerId);
//         timerId = setInterval(next, 1000);
//         this.addEventListener('click', paused);
//     }, 5000);
// }

const setPosition = () => sliderBody.style.transform = `translateX(${position}px)`;

const checkPosition = () => {
    if (counter < slidesToShow) {
        if (counter >= itemsCount - slidesToShow + 1) {
            sliderBody.style.transform = `translateX(0px)`;
            position = 0;
            counter = 0;
            radioBlock.children[0].checked = true;
            //imediatle move to first slide
            sliderBody.style.transition = 0 + `s`;

        } else {
            //slow slide change
            sliderBody.style.transition = 0.2 + `s`;
        }
    } else {
        if (counter >= itemsCount) {
            sliderBody.style.transform = `translateX(0px)`;
            position = 0;
            counter = 0;
            radioBlock.children[0].checked = true;
            //imediatle move to first slide
            sliderBody.style.transition = 0 + `s`;

        } else {
            //slow slide change
            sliderBody.style.transition = 0.2 + `s`;
        }
    }
}


function addSettings() {
    timerId = setInterval(next, timeForAChange);
    btnNext.addEventListener('click', next);
    // btnNext.addEventListener('click', paused);
    // btnPrev.addEventListener('click', paused);
    btnPrev.addEventListener('click', prev);
}

window.addEventListener('load', function() {
    addRadio();
    checkWidth();
    addSettings();


    radioBlock.children[0].checked = true;
});

window.addEventListener('resize', function() {
    checkWidth();
});

window.addEventListener('focus', function() {
    //clearTimeout(pausedId);
    clearInterval(timerId);
    addSettings();
});




window.addEventListener('blur', function() {
    //clearTimeout(pausedId);
    clearInterval(timerId);
});

checkPosition();