/* Faça um Programa que converta metros para centímetros. 

let numero = parseFloat (prompt("Informe sua altura"))
let media = (numero) /0.01

alert ("este é o valor convertido em cemtímetros " + media) */

function converter(){
    let metros, calcularaltura
    metros = document.getElementById("metros").value 
    calcularaltura = (parseFloat(metros)) * 100
    document.getElementById("resultado").innerText = "Sua altura informada em cemtimetros foi: " + calcularaltura + "cm"   
    document.getElementById("resultado").value = ""
}