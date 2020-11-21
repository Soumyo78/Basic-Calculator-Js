document.getElementById('btn-7').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "7";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-8').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "8";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-9').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "9";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-4').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "4";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-5').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "5";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-6').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "6";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-1').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "1";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-2').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "2";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-3').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "3";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-0').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "0";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-plus').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "+";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-minus').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "-";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-/').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "/";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-*').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "*";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-(').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "(";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-)').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + ")";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-%').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1 + "*(1/100)";
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-c').addEventListener("click", () =>{
    var num1 = document.getElementById('input-box').value;
    var num1 = num1.toString();
    num2 = num1.slice(0, -1);
    document.getElementById('input-box').value = num2;
})

document.getElementById('btn-eql').addEventListener("click", () =>{
    var a = document.getElementById('input-box').value;
    var result = eval(a);
    document.getElementById('input-box').value = result;
})

document.getElementById('btn-ac').addEventListener("click", () =>{
    document.getElementById('input-box').value = "";
    num1 = null;
    num2 = null;
})