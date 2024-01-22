<?php
$servername = "http://127.0.0.1:8081/";
$username = "root";
$password = "";
$dbname = "cpw-faq";

try {
  $conn = new PDO("mysql:host=$servername;dbname=cpw-faq", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";

} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>