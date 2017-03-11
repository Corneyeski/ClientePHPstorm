<?php
echo "<h1>Esta es la practica de amazon por Alan Vallvé con conexion a BBDD</h1>";

$servername = "sistemas.cnq5lowmvgso.eu-central-1.rds.amazonaws.com";
$username = "alan";
$password = "stucom123";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "success <br>";
    $sql = "SELECT * FROM usuarios";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            echo $row["name"];
        }
    }else{
        echo "0 rows";
    }
}
echo "Connected successfully";
?>