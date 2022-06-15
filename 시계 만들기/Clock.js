const clock = document.querySelector(".clock");
const clockday = document.querySelector(".clockday");

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
function getclockday(){
    const date = new Date();
    const year = String(date.getFullYear()).padStart(4,"0");
    const month = date.getMonth() + 1;
    const dates = date.getDate();
    clockday.innerText = (`${year}년 ${month}월 ${dates}일`)
}

getclockday();
getclock();
setInterval(getclock, 1000);
setInterval(getclockday, 1000);