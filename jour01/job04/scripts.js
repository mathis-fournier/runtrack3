function leapYear (input) {
  const year = input
  let answer
  if (year % 400 == 0) {
    answer = 'yes'
  } else {
    answer = 'no'
  }
  console.log(answer)
  alert(answer)
}

leapYear(prompt('Entrer une année'))
