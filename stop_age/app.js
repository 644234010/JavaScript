var age = prompt("กรุณากรอกอายุ!")

if(age<=17){
    document.getElementById('content').innerHTML = "ไม่สามารถใช้เว็บไซค์นี้ได้"
}
else if(age>=18){
    document.getElementById("video").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/3FilSKywVac?si=_9PJ50j-e4BRwZeT\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
}