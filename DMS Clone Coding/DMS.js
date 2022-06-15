const menu = document.querySelector(".menu_date");
const menus = document.querySelector(".main_menu");
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");

const date = new Date();
const year = String(date.getFullYear()).padStart(4,"0");
const month = String(date.getMonth() + 1).padStart(2,"0");
const dates = String(date.getDate()).padStart(2,"0");
menu.innerText = `${year}년 ${month}월 ${dates}일`;


fetch(`https://api.dsm-dms.com/meal/${year}-${month}-${dates}`)
.then((response) => response.json())
.then((json) => {
    const menu_header = Object.keys(json[`${year}-${month}-${dates}`]["breakfast"]);
    const menu_header2 = Object.keys(json[`${year}-${month}-${dates}`]["lunch"]);
    const menu_header3 = Object.keys(json[`${year}-${month}-${dates}`]["dinner"]);
    const a = json[`${year}-${month}-${dates}`];

        for(let i = 0; i < menu_header.length; i++){
            breakfast.appendChild(document.createElement("div")).innerText = a["breakfast"][i];
        }
        for(let i = 0; i < menu_header2.length; i++){
            lunch.appendChild(document.createElement("div")).innerText = a["lunch"][i];
        }
        for(let i = 0; i < menu_header3.length; i++){
            dinner.appendChild(document.createElement("div")).innerText = a["dinner"][i];
        }
})

