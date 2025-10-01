jQuery(document).ready(function($) {

    function jsonValueKey(json, key) {
        return json[key]; 
    }


let jsondata;    
$("#ID").click(function(){
let ID = document.getElementById('IDinput').value;
fetch("pokemon.json").then(
      function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
          var item = jsondata.find(item => item.id === parseInt(ID));
          console.log(item.name);
          console.log(item.id);
          console.log(item.type);
        }
      )
});

$("#name").click(function(){
let name = document.getElementById('NOMinput').value;
fetch("pokemon.json").then(
      function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
          var item = jsondata.find(item => item.name.english === name);
          console.log(item.name);
          console.log(item.type);
          console.log("id :" + item.id);
        }
      )
});


$("#type").click(function(){
let type = document.getElementById('type-select').value;
fetch("pokemon.json").then(
      function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
          const matchingPokemons = jsondata.filter(p =>
        p.type.map(t => t.toLowerCase()).includes(type.toLowerCase())
      );
        if (matchingPokemons.length > 0) {
        console.log("Pokémons trouvés avec le type", type + ":");
        matchingPokemons.forEach(p => {
          console.log(p.name.english + " (" + p.type.join(", ") + ")");
        });
    }
  });
});

let filtre1 = document.getElementById('NOMinput').value;
let filtre2 = document.getElementById('IDinput').value;
let type = document.getElementById('type-select').value;

// async function fetchJson(){
//   const response = await fetch("http://localhost/runtrack3/jour04/job03/pokemon.json")
//   const content = await response.json();
//   console.log(content);
  
//   const foundpokemon = json.find()
// }
// fetchJson();
fetch("pokemon.json").then(
      function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;

          const matchingPokemons = jsondata.filter(p =>
        p.type.map(t => t.toLowerCase()).includes(type.toLowerCase()));
        const item = jsondata.find(item => item.id === parseInt(filtre2));

        var html = "";


        if (matchingPokemons.length > 0)  {
        console.log("Pokémons trouvés avec les filtres:", "id:" + filtre2 + type + filtre1 + ":");
        matchingPokemons.forEach(p => {
          try
          {
          if (p.name.english == item.name.english || undefined && p.id === item.id || undefined)
          {
            
          console.log(p.name.english + " (" + p.type.join(", ") + ")");
          html="<td>"+p.id+"</td><td>"+p.name.english+"</td><td>"+p.type+"</td>";
          document.getElementById('result').innerHTML+=html;
          }
          
          } 
          catch 
          {
            console.log(p.name.english + " (" + p.type.join(", ") + ")");
          }

        });
    }
  });






});