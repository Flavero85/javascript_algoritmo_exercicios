

function converter(){
    let fahrenheit, calcular
    fahrenheit = document.getElementById("fahrenheit").value 
    calcular = (parseFloat(fahrenheit))- 32 / 1, 8
    document.getElementById("resultado").innerText = "a conversão em Celsius é: " + calcular  
    document.getElementById("resultado").value = ""
}