function tri (order, numbers)
{
    if (order == "asc"){
        console.log(numbers.sort(function(a, b){return a-b}));
    } 
    if (order == "desc"){
        console.log(numbers.sort(function(a, b){return b-a}));
    } 
}

let numbers = [2, 1, 3]
var order = "asc";

tri("desc", [2, 1, 3]);