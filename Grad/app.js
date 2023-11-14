let Score = prompt("คะแนนของคุณ")
if(Score >= 80){
    document.getElementById("result").innerHTML = " เกรด A"
}else if(Score >= 70){
    document.getElementById("result").innerHTML = " เกรด B"
}else if(Score >= 60){
    document.getElementById("result").innerHTML = " เกรด C"
}else if(Score >= 50){
    document.getElementById("result").innerHTML = " เกรด D"
}else if(Score <= 49){
    document.getElementById("result").innerHTML = " เกรด F"
}
