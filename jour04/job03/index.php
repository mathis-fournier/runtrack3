<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
<button id="ID">Chercher par ID</button>
<input
  type="text"
  id="IDinput"
  name="name"
  required
  minlength="1"
  maxlength="3"
  size="10" />



<button id="name">Chercher par nom</button>
<input
  type="text"
  id="NOMinput"
  name="name"
  required
  minlength="1"
  maxlength="25"
  size="10" />



<button id="type">Chercher par type</button>
<select name="types" id="type-select">
  <option value="">Choisir un type</option>
  <option value="Fire">Fire</option>
  <option value="Grass">Grass</option>
  <option value="Poison">Poison</option>
  <option value="Flying">Flying</option>
</select>

<button id="filtrer">Filtrer</button>



<table style="border: 1px solid black; background-color: #D6EEEE;"> 
    <tr>
    <th>ID</th>
    <th>Nom</th>
    <th>Type</th>
    </tr>

    <tr>
      <tbody id="result"></tbody>

    </tr>
</table>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src = "scripts.js"></script>
</body>
</html>