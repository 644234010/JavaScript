var lotto_number = prompt("กรอกเลขที่ต้องการซื้อ")
var random_number =  Math.floor(Math.random() * 101)

document.getElementById("random").innerHTML = random_number
if(lotto_number== random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้รางวันที่1 !!"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วยด้วยคุณไม่ได้รางวันที่1 !!"
}

