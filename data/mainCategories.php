<?php

//open database connection
require('../php_includes/database_connect.php');

$queryItem = "SELECT categoryName, idName ";
$queryItem .= "FROM main_categories";
$resultItem = mysqli_query($connection, $queryItem);

//handle data from database
$categoriesData = [];
while($item = mysqli_fetch_assoc($resultItem)){
array_push($categoriesData, $item );
}
//organize returned data
print "{\"response\":".json_encode($categoriesData)."}";

?>

<?php
// Close database connection
mysqli_close($connection);
?>