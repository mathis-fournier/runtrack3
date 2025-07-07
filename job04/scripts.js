function leapYear(input) {
    let year = input;
    let answer;
    if (year % 400 == 0) {
        answer = "yes";
    } else {
        answer = "no";
    }
    console.log(answer);
}

leapYear(prompt("Entrer une année"))
