document.querySelector('.add').onclick = function actionAdd(){ 
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    alert(Number(a) + Number(b));
};


let substr = document.querySelector("#subtr");
substr.onclick = actionSubtr;
function actionSubtr(){ 
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    alert(Number(a) - Number(b))
  
    
};

document.querySelector('.multi').onclick = function actionMulti()
{ let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    alert(Number(a) * Number(b))
}

document.querySelector('.divid').onclick = function actionDivid()
{ let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    
    if (b==0) {
        alert ('на ноль делить нельзя')
    };
}



