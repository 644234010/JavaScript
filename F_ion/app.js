function tocelsius(){
    let fahrenheit = prompt ("กรอกอุณหภูมิ fahrenheit :")
    let value = (fahrenheit -32) * 5 / 9
    document.getElementById("result_fahrenheit").innerHTML = value.toFixed(2) + "celsius"
}
function tofahrenheit(){
    let celsius = prompt ("กรอกอุณหภูมิ fahrenheit :")
    let value = (celsius *9/5) +32
    document.getElementById("result_celsius").innerHTML = value.toFixed(2) + "fahrenheit"
}
tocelsius()
tofahrenheit()