fetch("expression.txt")
.then((x) => x.text())
.then((y) =>
document.getElementById("p").innerHTML = y)