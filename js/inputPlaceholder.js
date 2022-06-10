'use strict';

(function(root) {

    let parent = document.querySelector(root);
    let inputs = parent.querySelectorAll('.input');
    let btn = parent.querySelector('.subscribe__btn');
    let checkEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{2,}\.){1,2}[-A-Za-z]{2,})$/;

    for (const elem of inputs) {
        elem.placeholder = elem.dataset.value;

        function addPlaceholder() {
            elem.placeholder = '';
        }

        function addClass() {
            if (elem.value != '') {
                elem.classList.add('focus');
            }
        }

        function removeClass() {
            elem.placeholder = elem.dataset.value;
            if (elem.value == '') {
                elem.classList.remove("focus");
            }
        }

        function checkValidation() {
            if (!checkEmail.test(elem.value) && elem.value != '') {
                elem.classList.add('err');
            } else {
                elem.classList.remove('err');
                if (elem.value != '') {
                    btn.type = 'submit';
                }
            }
        }


        elem.addEventListener('input', addClass);
        elem.addEventListener('focus', addPlaceholder);
        elem.addEventListener('blur', removeClass);
        elem.addEventListener('blur', checkValidation)
    }
})('.subscribe__form')