/* Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. */

/*let temperatura = parseFloat(prompt("Informa a temperatura em Fahrenheit"))

let soma = ((temperatura -32) / 1.8)
alert ("A temperatura em Celsius é: " + soma.toFixed(1)) */

function converter(){
    let celsius, calcular
    celsius = document.getElementById("celsius").value 
    calcular = (parseFloat(celsius * 1,8)) + 32
    document.getElementById("resultado").innerText = "a conversão em fahrenheit é: " + calcular  
    document.getElementById("resultado").value = ""
}