/* Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58 

let altura = parseFloat(prompt("Informa a sua altura"))

let soma = ((72.7*altura) - 58)
alert ("Seu peso ideal é: " + soma.toFixed(1)) */

function calcularimc(){
    let altura, calcular
    altura = document.getElementById("altura").value 
    calcular = (parseFloat(altura * 72.7)) - 58
    document.getElementById("resultado").innerText = "Seu peso ideal é: " + calcular  
    document.getElementById("resultado").value = ""
}