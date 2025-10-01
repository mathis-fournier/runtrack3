function citation () {
  console.log(citationtext)
}

const citationtext = document.getElementById('citation').textContent
const button = document.getElementById('button').addEventListener('click', citation)
