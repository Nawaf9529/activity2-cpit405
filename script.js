function filterTopTeam(){
let rows = document.getElementsByTagName("tr");

for(let i = 0;i < rows.length ; i++){
    if(i < 6){
        rows[i].style.display = "";
    }
    else{
        rows[i].style.display = "none";
    }
}
}

function filterAll(){
    let rows = document.getElementsByTagName("tr");

for(let i = 0;i < rows.length ; i++){
        rows[i].style.display = "";
}
}

function checkEvent(){
    let event1=document.getElementsByTagName("input")[0];

    if(event1.checked){
        filterTopTeam();
    }
    else{
        filterAll();
    }
}

///////////Extra credit/////////
function arrowUp(){
    let table= document.querySelector("tbody");
    let rows = document.querySelectorAll("tbody tr");
    if(!isDecreasesd(rows)){
        for(let i = rows.length-1; i >= 0 ; i--){
            table.appendChild(rows[i])
        }
    }

}
function arrowDown(){
    let table= document.querySelector("tbody");
    let rows = document.querySelectorAll("tbody tr");
    if(isDecreasesd(rows)){
        for(let i = rows.length-1; i >= 0 ; i--){
            table.appendChild(rows[i])
        }
    }
}

function isDecreasesd(rows){
let check=false;
for(let i = 0; i < rows.length-1 ; i++){
    let value1=rows[i].getElementsByTagName('td')[7].innerText;
    let value2=rows[i+1].getElementsByTagName('td')[7].innerText
    if(value1>value2){
        check=true;
    }
}
return check;
}

