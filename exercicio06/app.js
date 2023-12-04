/* Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. */

/*let numero1 = parseFloat(prompt("Informe quanto você ganha por hora trabalhada"))
let numero2 = parseFloat(prompt("Informe quantas horas você trabalha no mês"))

let soma = (numero1 * numero2) 
alert("Seu salário por mês é: " + soma) */

function calcularsalario(){
    let sal_hora, horas_trabalhadas, calcularsalario
    sal_hora = document.getElementById("sal_hora").value 
    horas_trabalhadas = document.getElementById("horas_trabalhadas").value 
    calcularsalario = (parseFloat(sal_hora)) * (parseFloat(horas_trabalhadas))
    document.getElementById("resultado").innerText = "Seu salario mensal é: " + calcularsalario 
    document.getElementById("resultado").value = ""
}