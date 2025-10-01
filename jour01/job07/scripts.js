function jourtravaille () {
  // date = new Date();
  for (let i = 0; i < jourferie.length; i++) {
    if (a <= jourferie[i]) {
      alert('ce jour est un jour ferié')
    } else {
      console.warn('jour travaillé')
    }
  }

  if (b == 0 || b == 6) {
    alert('ce jour est un weekend')
  }
}

const jourferie = [
  new Date(Date.UTC(2020, 3, 13)), // 13 AVRIL
  new Date(Date.UTC(2020, 0, 1)), // 1 JANVIER
  new Date(Date.UTC(2020, 4, 8)), // 8 MAI
  new Date(Date.UTC(2020, 4, 21)), // 21 MAI
  new Date(Date.UTC(2020, 5, 1)), // 1 JUIN
  new Date(Date.UTC(2020, 6, 14)), // 14 JUILLET
  new Date(Date.UTC(2020, 7, 15)), // 15 AOUT
  new Date(Date.UTC(2020, 10, 1)), // 1 NOV
  new Date(Date.UTC(2020, 10, 11)), // 11 NOV
  new Date(Date.UTC(2020, 11, 25)) // 25 DEC
]

var a = new Date(prompt('date 20XX-MM-DD'))
const b = a.getDay()

console.log(a)
console.log(b)
console.log(jourferie)
jourtravaille()
