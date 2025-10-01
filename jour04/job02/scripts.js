jQuery(document).ready(function($) {

    function jsonValueKey(json, key) {
        return json[key]; 
    }

    var json = {
        name: "La Plateforme_",
        address: "8 rue d'hozier",
        city: "Marseille",
        nb_staff: "11",
        creation: "2019"
    };

    var result = prompt("name, city, creation, adress, nb_staff");

    var value = jsonValueKey(json, result);

    console.log(value);

});