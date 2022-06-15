let input = document.querySelector('.input');
const addListBtn = document.querySelector(".addListBtn");
const list = document.querySelector(".list");
let i = 1;

function addBtnClick(e) {
    if(input.value !== "" && e.key === "Enter"){
        addListBtnClick();
    }
}

function addListBtnClicks(){
    if(input.value !== ""){
        addListBtnClick();
    }
}
window.addEventListener("keypress", addBtnClick);
function addListBtnClick() {
    const addlist = document.createElement("div");
    const checkbox = document.createElement("input");
    let text = document.createElement("p");
    const edit = document.createElement("button");
    const XBtn = document.createElement("button");
    const editimg = document.createElement("div");
    list.appendChild(addlist);
    addlist.appendChild(XBtn);
    addlist.appendChild(checkbox);
    addlist.appendChild(text);
    addlist.appendChild(edit);
    edit.appendChild(editimg);

    XBtn.innerText = "X";

    addlist.className = "mainbox";
    checkbox.className = "checkbox";
    text.id = "text";
    edit.className = "edit";
    XBtn.className = "XBtn";
    checkbox.type = "checkbox";
    text.innerText = input.value;
    editimg.innerText = "📝";
    editimg.className = "imoge"
    input.value = "";
    
    checkbox.addEventListener("click", function edit(){
        if(checkbox.checked === true){
            text.className = "underbar";
        }
        else if(checkbox.checked !== true){
            text.classList.remove("underbar");
        }
    });
    
    function editBtnClick(){
        if(i === 1){
            i = 0;
            const editinput = document.createElement("input");
            addlist.appendChild(editinput);
            editinput.className = "editinput";
            
            
            function editFunction(e){
                if(e.key === "Enter" && editinput.value !== ""){
                    text.innerText = editinput.value;
                    editinput.value = "";
                    editinput.remove(list);
                    i = 1;
                }
                else if(e.key === "Enter"){
                    editinput.remove(list);
                    i = 1;
                }
            }
            
            window.addEventListener("keypress", editFunction);
        }}
        
        editimg.addEventListener("click", editBtnClick);
        
        XBtn.addEventListener("click", function listend(){
            list.removeChild(addlist);
            i = 1;
        });
    }
    
    
    addListBtn.addEventListener("click", addListBtnClicks);