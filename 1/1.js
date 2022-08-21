const div = document.querySelector('.getName');
document.querySelector('#btn').onclick = addName;

function addName(){
    const valueName = document.querySelector('input').value
    alert(`Привет ${valueName}`)
    div.innerHTML = valueName
    };
addName();


//смена цвета
const color = [ "#454"];
document.querySelector('#back').onclick = function changeBackground(){
    document.body.style.background = color;
    setTimeout(() => document.body.style.background = "", 1000);
    console.log(color)
}

//смена картинок 

document.querySelector('.moveTo').onclick = function changeImage(){
    let picture = document.querySelector('.picture');
    picture.src = "./assets/IMAGE6.JPG";
console.log(picture);
}

    document.querySelector('.moveBack').onclick = function changeImage2(){
    let picture2 = document.querySelector('.picture');
    picture2.src = "./assets/IMAGE4.JPG";
    console.log(picture2);
}

