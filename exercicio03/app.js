/* Faça um Programa que peça dois números e imprima a soma. 

let numero1 = parseFloat (prompt ("Informe um número"))
let numero2 = parseFloat (prompt ("Informe outro número"))

let soma =  (numero1 + numero2) 
alert("O resultado é: " + soma)
// feito no portugol*/

function calcularsoma(){
    let numero1, numero2, calcularsoma
    numero1 = document.getElementById("numero1").value 
    numero2 = document.getElementById("numero2").value
    calcularsoma = (parseFloat(numero1) + parseFloat(numero2))
    document.getElementById("resultado").innerText = "o numero informado foi: " + calcularsoma    
    document.getElementById("resultado").value = ""
}