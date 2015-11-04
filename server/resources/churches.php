<?php
//open database connection
require('../php_includes/database_connect.php');

$queryItem = "SELECT mainTitle, item_id ";
$queryItem .= "FROM items ";
$queryItem .="WHERE item_type='churches'";
$resultItem = mysqli_query($connection, $queryItem);

//handle data from database
$churchesData = [];
while($item = mysqli_fetch_assoc($resultItem)){
  array_push($churchesData, $item );
}
//organize returned data
print "{\"response\":".json_encode($churchesData)."}";

?>

<?php
// Close database connection
mysqli_close($connection);
?>