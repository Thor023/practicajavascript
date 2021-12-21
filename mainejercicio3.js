var btnsuma = document.getElementById("btn-sumar");
btnsuma.addEventListener("click", sumando)
function sumando() {  
    var x,y,suma,text;  
    x = parseInt(document.getElementById("valor1").value);  
    y = parseInt(document.getElementById("valor2").value);
    suma=parseFloat(x)+parseFloat(y);  
    text= suma;  
    document.getElementsByClassName("resultado")[0].innerHTML = text;  
};
var btnresta = document.getElementById("btn-restar");
btnresta.addEventListener("click", restando)
function restando() {  
    var x,y,suma,text;  
    x = parseInt(document.getElementById("valor1").value);  
    y = parseInt(document.getElementById("valor2").value);  
    if ((y)>=(x)){
        text = "0"
    } else {  
    resta=parseFloat(x)-parseFloat(y);  
    text= resta;  
    }  
    document.getElementsByClassName("resultado")[0].innerHTML = text;  
};





