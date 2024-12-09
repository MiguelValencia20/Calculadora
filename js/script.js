function sumar(numero1,numero2){
    let resultado_suma = +numero1 + +numero2;
    return resultado_suma
}

function Mostrar_Suma(){
    let elementoNumero1 = document.getElementById("numero1");
    let elementoNumero2 = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoSuma = sumar(elementoNumero1.value, elementoNumero2.value);
    elementoTexto.textContent = elementoSuma;
}

function restar(numero1,numero2){
    let resultado_resta = numero1 - numero2;
    return resultado_resta;
}

function Mostrar_Resta(){
    let elementoNumero1 = document.getElementById("numero1");
    let elementoNumero2 = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoResta = restar(elementoNumero1.value, elementoNumero2.value);
    elementoTexto.textContent = elementoResta;

}

function multiplicar(numero1,numero2){
    let resultado_mult = numero1 * numero2;
    return resultado_mult;
}

function Mostrar_Mult(){
    let elementoNumero1 = document.getElementById("numero1");
    let elementoNumero2 = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoMult = multiplicar(elementoNumero1.value, elementoNumero2.value);
    elementoTexto.textContent = elementoMult;
}

function division(numero1,numero2){
    let resultado_div = numero1 / numero2;
    return resultado_div;
}

function Mostrar_Div(){
    let elementoNumero1 = document.getElementById("numero1");
    let elementoNumero2 = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoDiv = division(elementoNumero1.value, elementoNumero2.value);
    elementoTexto.textContent = elementoDiv;
}

function raiz(numero2){
    let resultado_raiz =  Math.sqrt(numero2);
    return resultado_raiz;
}

function Mostrar_Raiz(){
    let elementoNumero2 = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoRaiz = raiz(elementoNumero2.value);
    elementoTexto.textContent = elementoRaiz;
}

function potencia(numero1,numero2){
    let resultado_potencia =  Math.pow(numero1,numero2);
    return resultado_potencia;
}

function Mostrar_Potencia(){
    let elementoNumero1 = document.getElementById("numero1");
    let elementoNumero2 = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoPotencia = potencia(elementoNumero1.value,elementoNumero2.value);
    elementoTexto.textContent = elementoPotencia;
}

function absoluto(numero2){
    let resultado_absoluto =  Math.abs(numero2);
    return resultado_absoluto;
}

function Mostrar_Abs(){
    let elementoNumero2 = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoAbsoluto = absoluto(elementoNumero2.value);
    elementoTexto.textContent = elementoAbsoluto;
}

function random(numero1,numero2){
    numero2 = numero2 + 1
    resultado_Random = Math.floor(Math.random() * (numero2 - numero1)+ numero1);
    return resultado_Random;
}

function Mostrar_Random(){
    let elementoMin = document.getElementById("numero1");
    let elementoMax = document.getElementById("numero2");
    let elementoTexto = document.getElementById("resultado");
    let elementoRandom = random(elementoMin.value,elementoMax.value)
    elementoTexto.textContent = elementoRandom;
}

function Mostrar_Round(){
    let resultante = document.getElementById("resultado");
    let redondo = Number(resultante.textContent)

    let total = Math.round(redondo);
    resultante.textContent = total
    
}

function Mostrar_Floor(){
    let resultante = document.getElementById("resultado");
    let redondo = Number(resultante.textContent)

    let total = Math.floor(redondo);
    resultante.textContent = total
    
}

function Mostrar_Ceil(){
    let resultante = document.getElementById("resultado");
    let redondo = Number(resultante.textContent)

    let total = Math.ceil(redondo);
    resultante.textContent = total
    
}