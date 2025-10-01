const button = document.getElementById('button').addEventListener('click', addone)
const compteur = document.getElementById('compteur')

let clicks = 0
compteur.innerHTML = clicks

function addone () {
  clicks++
  compteur.innerHTML = clicks
}
