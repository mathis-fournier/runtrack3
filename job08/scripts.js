function nombrepremier () {
    for (i = 2; i < nbr; i++){
        if (nbr%i == 0) {
            return false;
        } 
        else 
        {
            return nbr > 2
        }
    }
}  
let nbr = parseInt(prompt());
console.log(nombrepremier(2));

nombrepremier();

