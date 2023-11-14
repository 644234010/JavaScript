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
function   tocelsiusX(value){
    alert(tocelsius(value))
}  
function   tofahrenheitX(value){
    alert(tofahrenheit(value))
}  
