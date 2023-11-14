let round = prompt ("รอบการเล่น ! ? ")
let sumx = 0
let sum = parseInt(round)


for(var i = 0; i < round; i++){
    var answer = prompt("หัว หรือ ก้อย เดามาสิ5555!!")
    sumx = sumx + (answer === "หัว" ? 1 : 0);
    document.getElementById("game").innerHTML += "คำตอบของคุณ คือ !! " + answer + "<br>"
    var randomX =  ""
    if(Math.floor(Math.random() * 20) <= 9 ){
        randomX = "หัว"
    }else{
        randomX = "ก้อย"
    } 
    
    if(answer == randomX ){
        alert (" ยินดีด้วยคุณตอบถูก !! :) ")
    }else{
        alert (" เสียใจด้วยคุณตอบผิด !! :( ")
    }  
}
document.getElementById("score").innerHTML += "จำนวนรอบที่ถูกต้อง คือ !! " + sumx + "รอบ" + "<br>"
document.getElementById("result").innerHTML = "จำนวนการเล่น"+ sum  + "รอบ" + "<br>"
