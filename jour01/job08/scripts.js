function nombrepremier (nbr, nbr2) {
  for (i = 2; i < nbr; i++) {
    if (nbr % i == 0 || nbr2 % i == 0) {
      return false
    } else {
      console.log(nbr + nbr2)
      return true
    }
  }
}

const nbr = parseInt(prompt())
const nbr2 = parseInt(prompt())
console.log(nombrepremier(nbr, nbr2))
nombrepremier()
