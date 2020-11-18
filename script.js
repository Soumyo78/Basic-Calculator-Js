var num1, num2;

num1 = document.getElementById('f_num').value;
num2 = document.getElementById('s_num').value;
var c;

function add(){
    num1 = document.getElementById('f_num').value;
    num2 = document.getElementById('s_num').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    res = num1 + num2;
    document.getElementById('result').innerHTML = res;
}

function minus(a, b){
    num1 = document.getElementById('f_num').value;
    num2 = document.getElementById('s_num').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    res = num1 - num2;
    document.getElementById('result').innerHTML = res;
}

function product(a, b){
    num1 = document.getElementById('f_num').value;
    num2 = document.getElementById('s_num').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    res = num1 * num2;
    document.getElementById('result').innerHTML = res;
}

function divide(a, b){
    num1 = document.getElementById('f_num').value;
    num2 = document.getElementById('s_num').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    res = num1 / num2;
    document.getElementById('result').innerHTML = res;
}

document.getElementById('calculate-btn').addEventListener("click", () =>{
    if(document.getElementById('select_op').value == "plus"){
        add();
    }

    if(document.getElementById('select_op').value == "minus"){
        minus();
    }

    if(document.getElementById('select_op').value == "divide"){
        divide();
    }

    if(document.getElementById('select_op').value == "product"){
        product();
    }
})