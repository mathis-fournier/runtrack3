<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP MYSQL</title>
</head>
<body>
<table style="border: 1px solid black">
    <tr>
        <th>ID</th>
        <th>nom</th>
        <th>prenom</th>
        <th>email</th>
    </tr>    
<?php 
$servername = "127.0.0.1";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password, 'utilisateurs');

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM utilisateurs";
$result = $conn->query($sql);

if (!$result) {
  die("Connection failed: " . mysqli_connect_error());
} else {
    echo "connecté a ", $servername;
}

if ($result->num_rows > 0){
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"] . "</td><td>" . $row["nom"] . "</td><td>" . $row["prenom"] . "</td><td>" . $row["email"] . "</td></tr>";

    }
}
?>
</table>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src = "scripts.js"></script>
</body>
</html>