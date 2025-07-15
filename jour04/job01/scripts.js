jQuery(document).ready(function($) {
   // Votre code ici avec les appels à la fonction $()


$("#button").click(function(){
fetch("expression.txt")
.then((x) => x.text())
.then((y) =>
document.getElementById("p").innerHTML = y)
});



});
