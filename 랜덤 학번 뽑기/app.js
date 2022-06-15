const gradebutton = document.querySelector(".gradebutton");
const gradenumber = document.querySelector(".gradenumber");
const classbutton = document.querySelector(".classbutton");
const classnumber = document.querySelector(".classnumber");
const number1button = document.querySelector(".number1button");
const number1 = document.querySelector(".number1")
const number2button = document.querySelector(".number2button");
const number2 = document.querySelector(".number2");

function gradeButtonClick(){
    const rand_1_3 = Math.floor(Math.random() * 3) + 1;
    gradenumber.innerText = rand_1_3;
}
function classButtonClick(){
    const rand_1_4 = Math.floor(Math.random() * 4) + 1;
    classnumber.innerText = rand_1_4;
}
function number1ButtonClick(){
    if(gradenumber.innerText !== '1'){
        const rand_1_2 = Math.floor(Math.random() * 3);
        number1.innerText = rand_1_2;
    }
    else{
        const rand_1_2 = Math.floor(Math.random() * 2);
        number1.innerText = rand_1_2;
    }
}
function number2ButtonClick(){
    if(number1.innerText === '2'){
        number2.innerText = 0;
    }
    else{
        const rand_1_8 = Math.floor(Math.random() * 8) + 1;
        number2.innerHTML = rand_1_8;
    }
}

gradebutton.addEventListener("click", gradeButtonClick);
classbutton.addEventListener("click", classButtonClick);
number1button.addEventListener("click", number1ButtonClick);
number2button.addEventListener("click", number2ButtonClick);