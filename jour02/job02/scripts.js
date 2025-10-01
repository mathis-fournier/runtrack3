const button = document.getElementById('button')
const texte = document.getElementById('texte')

function showhide () {
  if (texte.style.display !== 'none') {
    texte.style.display = 'none'
  } else {
    texte.style.display = 'block'
  }
}
