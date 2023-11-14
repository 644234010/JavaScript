function tocelsius(fahrenheit){

    let value = (fahrenheit -32) * 5 / 9
    return value.toFixed(2) + "celsius"
}
function tofahrenheit(celsius){
    
    let value = (celsius *9/5) +32
    return value.toFixed(2) + "fahrenheit"
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<b>" + value + "</b>"
}   
alert(tocelsius(150))
display("result_celsius",tocelsius(150))
alert(tofahrenheit(150))
display("result_fahrenheit",tofahrenheit(150))