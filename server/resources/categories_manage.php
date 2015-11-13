<?php
/**
 * Created by PhpStorm.
 * User: Lula
 * Date: 11/12/2015
 * Time: 6:46 PM
 */

//open database connection
require('../includes/database_connect.php');

$queryItem = "SELECT * ";
$queryItem .= "FROM main_categories";
$resultItem = mysqli_query($connection, $queryItem);

//handle data from database
$categoriesData = [];
while($item = mysqli_fetch_assoc($resultItem)){
    array_push($categoriesData, $item );
}
//organize returned data
print "{\"response\":".json_encode($categoriesData)."}";

// Close database connection
mysqli_close($connection);
