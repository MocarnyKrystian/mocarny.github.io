// var promien = prompt("Podaj promien");
// var pole = Math.PI * Math.pow(promien, 2)
// alert("pole: " + pole);

function poleKola(r){
var pole = Math.PI * Math.pow(r,2);
return pole;
}
document.write(" Pole kola wynosi: ", poleKola(1))
document.write("<br><br><br>")
document.write(" Pole kola wynosi: ", poleKola(2))
document.write("<br><br><br>")
document.write(" Pole kola wynosi: ", poleKola(10))
document.write("<br><br><br>")


function poleProstokata(a,b){
var poleP = a * b;
return poleP;
}
document.write("Pole prostokata wynosi: ", poleProstokata(2,5))
document.write("<br><br><br>")
document.write("Pole prostokata wynosi: ", poleProstokata(20,50))
document.write("<br><br><br>")



