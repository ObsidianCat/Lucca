<?php
//open database connection
require('../includes/database_connect.php');
$id = $_GET['id'];

$queryItem = "SELECT * ";
$queryItem .= "FROM items ";
$queryItem .="WHERE item_id={$id}";
$resultItem = mysqli_query($connection, $queryItem);

$queryReview = "SELECT * ";
$queryReview .= "FROM reviews ";
$queryReview .="WHERE item_id={$id}";
$resultReview = mysqli_query($connection, $queryReview);


//if (!$result) {
//    die("Database query failed.");
//}

$itemData = [];
$reviews = [];
while($item = mysqli_fetch_assoc($resultItem)){
    array_push($itemData, $item );
}
while($oneReview = mysqli_fetch_assoc($resultReview)){
    array_push($reviews, $oneReview );
}
array_push($itemData, $reviews );
print "{\"response\":".json_encode($itemData)."}";
?>


<?php
// Close database connection
mysqli_close($connection);
?>