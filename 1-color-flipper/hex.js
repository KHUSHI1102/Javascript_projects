const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let hexColor ="#";
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
  
    color.textContent = hexColor;
    document.body.style.backgroundColor =hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}

function buttonclick(){
    alert("copy the color code");
}

function copy(copyId){
    let inputElement =document.createElement("input");
    inputElement.type="text";
    let copyText =document.getElementById(copyId).innerHTML;
    inputElement.value=copyText;
    document.body.appendChild(inputElement);
}
